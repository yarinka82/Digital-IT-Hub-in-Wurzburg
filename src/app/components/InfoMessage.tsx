"use client";

import { useEffect, useState } from "react";
import Dropdown from "./common/Dropdown";
import Icon from "./common/Icon";
import NewEvents, { NewEventsProp } from "./NewEvents";
import Button from "./common/Button";
import { useReadIds } from "./hooks/useReadIds";
import {
  autoUpdate,
  flip,
  FloatingOverlay,
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  size,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";

type InfoMessageProps = {
  events: NewEventsProp[];
};

export default function InfoMessage({ events }: InfoMessageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const { readIds, markRead, isLoaded } = useReadIds();

  const now = new Date();

  const futureEvents = events.filter((e) => {
    if (!e.date) return false;
    const [day, month, year] = e.date.split(".").map(Number);
    const eventDate = new Date(year, month - 1, day);
    return eventDate >= now;
  });

  const unreadCount = isLoaded
    ? futureEvents.filter((e) => !readIds!.includes(e.id)).length
    : 0;
  const hasUnread = unreadCount > 0;

  useEffect(() => {
    if (!isOpen) return;
    const ids = futureEvents.map((e) => e.id);
    const timer = setTimeout(() => markRead(ids), 2000);
    return () => clearTimeout(timer);
  }, [isOpen, futureEvents, markRead]);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: (open, _event, reason) => {
      setIsOpen(open);
      setIsPinned(open && reason === "click");
    },
    placement: "bottom-start",
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({ padding: 8 }),
      shift({ padding: 8 }),
      size({
        padding: 8,
        apply({ availableWidth, availableHeight, elements }) {
          elements.floating.style.maxHeight = `${Math.min(
            availableHeight,
            window.innerHeight * 0.75,
          )}px`;
          elements.floating.style.width = `${Math.min(400, availableWidth)}px`;
        },
      }),
    ],
  });

  const hover = useHover(context, {
    mouseOnly: true,
    handleClose: safePolygon(),
  });
  const click = useClick(context, { ignoreMouse: true });
  const dismiss = useDismiss(context, { outsidePressEvent: "click" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    click,
    dismiss,
  ]);

  const { setReference, setFloating } = refs;

  if (futureEvents.length === 0) return null;

  return (
    <>
      <div
        ref={setReference}
        className="relative group inline-flex cursor-pointer  z-10"
        {...getReferenceProps({
          onClick: (e) => e.stopPropagation(),
        })}
      >
        <Button
          type="button"
          className={`relative w-10 h-10 flex ${hasUnread ? "message origin-[40%_60%]" : ""}`}
        >
          <Icon className="icon-message" iconName={"email"} size={36} />
          {unreadCount > 0 && (
            <p className="char-message absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full min-w-5 h-5 flex items-center justify-center px-1 font-bold">
              {unreadCount}
            </p>
          )}
        </Button>
      </div>
      {isOpen && (
        <FloatingPortal>
          {isPinned && <FloatingOverlay className="z-998" />}
          <div
            ref={setFloating}
            style={floatingStyles}
            className="z-999 w-60 md:w-90 overflow-y-auto overscroll-contain custom-scrollbar"
            {...getFloatingProps({ onClick: (e) => e.stopPropagation() })}
          >
            <Dropdown
              className="static translate-x-0 translate-y-0 mt-0 w-full p-8 visible opacity-100 pointer-events-auto"
              droplist={futureEvents.map((event) => ({
                id: String(event.id),
                children: <NewEvents {...event} />,
              }))}
            />
          </div>
        </FloatingPortal>
      )}
    </>
  );
}
