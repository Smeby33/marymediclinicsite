import React from "react";
import "./GlassIcons.css";

type Item = {
  icon: React.ReactNode;
  color?: string;
  label?: string;
  customClass?: string;
};

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const getBackgroundStyle = (color?: string) => {
  if (!color) return {};
  return { background: gradientMapping[color] ?? color };
};

const GlassIcons: React.FC<{ items: Item[]; className?: string }> = ({ items, className }) => {
  return (
    <div className={`icon-btns ${className ?? ""}`}>
      {items.map((item, idx) => (
        <button
          key={idx}
          className={`icon-btn ${item.customClass ?? ""}`}
          aria-label={item.label ?? `icon-${idx}`}
          type="button"
        >
          <span className="icon-btn__back" style={getBackgroundStyle(item.color)} />
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden>
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label">{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;