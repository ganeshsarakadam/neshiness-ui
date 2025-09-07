// src/atoms/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var base = {
  fontFamily: "var(--font-sans)",
  borderRadius: "var(--radius-md)",
  paddingInline: "var(--space-4)",
  paddingBlock: "var(--space-2)",
  fontWeight: 600,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  cursor: "pointer",
  transition: "background-color .15s ease, color .15s ease, border-color .15s ease, box-shadow .15s ease"
};
var variants = {
  solid: {
    color: "white",
    backgroundColor: "var(--color-accent)",
    border: "1px solid var(--color-accent)"
  },
  outline: {
    color: "var(--color-accent)",
    backgroundColor: "transparent",
    border: "1px solid var(--color-accent)"
  },
  ghost: {
    color: "var(--color-accent)",
    backgroundColor: "transparent",
    border: "1px solid transparent"
  }
};
var sizes = {
  sm: { height: 32, fontSize: 13 },
  md: { height: 40, fontSize: 14 },
  lg: { height: 48, fontSize: 16 }
};
var Button = ({ variant = "solid", size = "md", style, children, ...rest }) => {
  const styleMerged = {
    ...base,
    ...variants[variant],
    ...sizes[size],
    ...style
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      style: styleMerged,
      onMouseEnter: (e) => {
        const el = e.currentTarget;
        if (variant === "solid") {
          el.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--color-accent-hover").trim();
        }
        if (variant === "outline") {
          el.style.backgroundColor = "var(--color-accent)";
          el.style.color = "white";
        }
        if (variant === "ghost") {
          el.style.backgroundColor = "var(--color-accent)";
          el.style.color = "white";
        }
      },
      onMouseLeave: (e) => {
        const el = e.currentTarget;
        if (variant === "solid") {
          el.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
        }
        if (variant === "outline") {
          el.style.backgroundColor = "transparent";
          el.style.color = "var(--color-accent)";
        }
        if (variant === "ghost") {
          el.style.backgroundColor = "transparent";
          el.style.color = "var(--color-accent)";
        }
      },
      ...rest,
      children
    }
  );
};

// src/atoms/Input/Input.tsx
import React from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Input = ({
  variant = "default",
  size = "md",
  error = false,
  label,
  helperText,
  errorText,
  className = "",
  ...props
}) => {
  const baseStyles = {
    fontFamily: "var(--font-sans)",
    fontSize: size === "sm" ? "14px" : size === "lg" ? "18px" : "16px",
    padding: size === "sm" ? "var(--space-2)" : size === "lg" ? "var(--space-4)" : "var(--space-3)",
    borderRadius: "var(--radius-md)",
    border: "1px solid",
    outline: "none",
    transition: "all 0.2s ease",
    width: "100%",
    boxSizing: "border-box"
  };
  const variants2 = {
    default: {
      backgroundColor: "var(--color-surface)",
      borderColor: error ? "#ef4444" : "var(--color-muted)",
      color: "var(--color-text)"
    },
    filled: {
      backgroundColor: "var(--color-muted)",
      borderColor: "transparent",
      color: "var(--color-text)"
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: error ? "#ef4444" : "var(--color-accent)",
      color: "var(--color-text)"
    }
  };
  const focusStyles = {
    borderColor: error ? "#ef4444" : "var(--color-accent)",
    boxShadow: `0 0 0 3px ${error ? "rgba(239, 68, 68, 0.1)" : "rgba(255, 138, 31, 0.1)"}`
  };
  const inputId = React.useId();
  const helperId = React.useId();
  return /* @__PURE__ */ jsxs("div", { className: `neshiness-input ${className}`, children: [
    label && /* @__PURE__ */ jsx2(
      "label",
      {
        htmlFor: inputId,
        style: {
          display: "block",
          marginBottom: "var(--space-2)",
          fontSize: "14px",
          fontWeight: "500",
          color: "var(--color-text)"
        },
        children: label
      }
    ),
    /* @__PURE__ */ jsx2(
      "input",
      {
        id: inputId,
        style: {
          ...baseStyles,
          ...variants2[variant]
        },
        onFocus: (e) => {
          Object.assign(e.currentTarget.style, focusStyles);
        },
        onBlur: (e) => {
          e.currentTarget.style.borderColor = variants2[variant].borderColor;
          e.currentTarget.style.boxShadow = "none";
        },
        "aria-invalid": error,
        "aria-describedby": helperText || errorText ? helperId : void 0,
        ...props
      }
    ),
    (helperText || errorText) && /* @__PURE__ */ jsx2(
      "div",
      {
        id: helperId,
        style: {
          marginTop: "var(--space-1)",
          fontSize: "12px",
          color: error ? "#ef4444" : "var(--color-text)",
          opacity: 0.7
        },
        children: error ? errorText : helperText
      }
    )
  ] });
};

// src/atoms/Badge/Badge.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Badge = ({
  children,
  variant = "default",
  size = "md",
  className = ""
}) => {
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: "500",
    borderRadius: "var(--radius-sm)",
    border: "none",
    outline: "none"
  };
  const sizeStyles = {
    sm: {
      fontSize: "12px",
      padding: "var(--space-1) var(--space-2)",
      minHeight: "20px"
    },
    md: {
      fontSize: "14px",
      padding: "var(--space-1) var(--space-3)",
      minHeight: "24px"
    },
    lg: {
      fontSize: "16px",
      padding: "var(--space-2) var(--space-4)",
      minHeight: "32px"
    }
  };
  const variantStyles = {
    default: {
      backgroundColor: "var(--color-muted)",
      color: "var(--color-text)"
    },
    success: {
      backgroundColor: "#10b981",
      color: "white"
    },
    warning: {
      backgroundColor: "#f59e0b",
      color: "white"
    },
    error: {
      backgroundColor: "#ef4444",
      color: "white"
    },
    info: {
      backgroundColor: "var(--color-accent)",
      color: "white"
    }
  };
  return /* @__PURE__ */ jsx3(
    "span",
    {
      className: `neshiness-badge neshiness-badge--${variant} neshiness-badge--${size} ${className}`,
      style: {
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant]
      },
      children
    }
  );
};

// src/atoms/Avatar/Avatar.tsx
import React2 from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Avatar = ({
  src,
  alt = "Avatar",
  fallback = "?",
  size = "md",
  shape = "circle",
  className = ""
}) => {
  const [imageError, setImageError] = React2.useState(false);
  const sizeStyles = {
    sm: { width: "32px", height: "32px", fontSize: "14px" },
    md: { width: "40px", height: "40px", fontSize: "16px" },
    lg: { width: "56px", height: "56px", fontSize: "20px" },
    xl: { width: "80px", height: "80px", fontSize: "28px" }
  };
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--color-muted)",
    color: "var(--color-text)",
    fontWeight: "600",
    borderRadius: shape === "circle" ? "50%" : "var(--radius-md)",
    overflow: "hidden",
    objectFit: "cover",
    ...sizeStyles[size]
  };
  const handleImageError = () => {
    setImageError(true);
  };
  return /* @__PURE__ */ jsx4(
    "div",
    {
      className: `neshiness-avatar neshiness-avatar--${size} neshiness-avatar--${shape} ${className}`,
      style: baseStyles,
      children: src && !imageError ? /* @__PURE__ */ jsx4(
        "img",
        {
          src,
          alt,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          },
          onError: handleImageError
        }
      ) : /* @__PURE__ */ jsx4("span", { style: { fontSize: "inherit", fontWeight: "inherit" }, children: fallback })
    }
  );
};

// src/atoms/Icon/Icon.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var iconMap = {
  // Navigation
  "home": "\u{1F3E0}",
  "menu": "\u2630",
  "close": "\u2715",
  "back": "\u2190",
  "forward": "\u2192",
  "up": "\u2191",
  "down": "\u2193",
  // Actions
  "search": "\u{1F50D}",
  "plus": "+",
  "minus": "\u2212",
  "edit": "\u270F\uFE0F",
  "delete": "\u{1F5D1}\uFE0F",
  "save": "\u{1F4BE}",
  "download": "\u2B07\uFE0F",
  "upload": "\u2B06\uFE0F",
  "copy": "\u{1F4CB}",
  "share": "\u{1F4E4}",
  // Status
  "check": "\u2713",
  "cross": "\u2717",
  "warning": "\u26A0\uFE0F",
  "info": "\u2139\uFE0F",
  "star": "\u2B50",
  "heart": "\u2764\uFE0F",
  "like": "\u{1F44D}",
  "dislike": "\u{1F44E}",
  // Communication
  "mail": "\u2709\uFE0F",
  "phone": "\u{1F4DE}",
  "message": "\u{1F4AC}",
  "notification": "\u{1F514}",
  // Media
  "play": "\u25B6\uFE0F",
  "pause": "\u23F8\uFE0F",
  "stop": "\u23F9\uFE0F",
  "volume": "\u{1F50A}",
  "mute": "\u{1F507}",
  "image": "\u{1F5BC}\uFE0F",
  "video": "\u{1F3A5}",
  // Settings
  "settings": "\u2699\uFE0F",
  "user": "\u{1F464}",
  "users": "\u{1F465}",
  "lock": "\u{1F512}",
  "unlock": "\u{1F513}",
  "key": "\u{1F511}",
  // Time
  "clock": "\u{1F550}",
  "calendar": "\u{1F4C5}",
  "time": "\u23F0",
  // Weather
  "sun": "\u2600\uFE0F",
  "moon": "\u{1F319}",
  "cloud": "\u2601\uFE0F",
  "rain": "\u{1F327}\uFE0F",
  // Technology
  "wifi": "\u{1F4F6}",
  "battery": "\u{1F50B}",
  "bluetooth": "\u{1F4F1}",
  "camera": "\u{1F4F7}"
};
var Icon = ({
  name,
  size = "md",
  color,
  className = ""
}) => {
  const sizeStyles = {
    sm: { fontSize: "14px", width: "14px", height: "14px" },
    md: { fontSize: "16px", width: "16px", height: "16px" },
    lg: { fontSize: "20px", width: "20px", height: "20px" },
    xl: { fontSize: "24px", width: "24px", height: "24px" }
  };
  const baseStyles = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: color || "var(--color-text)",
    ...sizeStyles[size]
  };
  const iconSymbol = iconMap[name] || "?";
  return /* @__PURE__ */ jsx5(
    "span",
    {
      className: `neshiness-icon neshiness-icon--${name} neshiness-icon--${size} ${className}`,
      style: baseStyles,
      role: "img",
      "aria-label": name,
      children: iconSymbol
    }
  );
};

// src/atoms/Spinner/Spinner.tsx
import React3 from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Spinner = ({
  size = "md",
  color = "var(--color-accent)",
  className = ""
}) => {
  const sizeStyles = {
    sm: { width: "16px", height: "16px" },
    md: { width: "24px", height: "24px" },
    lg: { width: "32px", height: "32px" }
  };
  const baseStyles = {
    display: "inline-block",
    border: "2px solid transparent",
    borderTop: `2px solid ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    ...sizeStyles[size]
  };
  React3.useEffect(() => {
    const styleId = "neshiness-spinner-animation";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);
  return /* @__PURE__ */ jsx6(
    "div",
    {
      className: `neshiness-spinner neshiness-spinner--${size} ${className}`,
      style: baseStyles,
      role: "status",
      "aria-label": "Loading"
    }
  );
};

// src/molecules/Card/Card.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var Card = ({
  children,
  variant = "default",
  padding = "md",
  className = ""
}) => {
  const baseStyles = {
    backgroundColor: "var(--color-surface)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid var(--color-muted)",
    overflow: "hidden"
  };
  const variantStyles = {
    default: {
      boxShadow: "var(--shadow-1)"
    },
    elevated: {
      boxShadow: "var(--shadow-2)",
      border: "none"
    },
    outlined: {
      boxShadow: "none",
      border: "1px solid var(--color-muted)"
    }
  };
  const paddingStyles = {
    none: { padding: "0" },
    sm: { padding: "var(--space-3)" },
    md: { padding: "var(--space-4)" },
    lg: { padding: "var(--space-6)" }
  };
  return /* @__PURE__ */ jsx7(
    "div",
    {
      className: `neshiness-card neshiness-card--${variant} neshiness-card--${padding} ${className}`,
      style: {
        ...baseStyles,
        ...variantStyles[variant],
        ...paddingStyles[padding]
      },
      children
    }
  );
};

// src/molecules/SearchBox/SearchBox.tsx
import React4 from "react";
import { jsx as jsx8, jsxs as jsxs2 } from "react/jsx-runtime";
var SearchBox = ({
  placeholder = "Search...",
  value = "",
  onChange,
  onSearch,
  loading = false,
  className = ""
}) => {
  const [searchValue, setSearchValue] = React4.useState(value);
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
    onChange?.(newValue);
  };
  const handleSearch = () => {
    onSearch?.(searchValue);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: `neshiness-searchbox ${className}`,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-2)",
        width: "100%"
      },
      children: [
        /* @__PURE__ */ jsxs2("div", { style: { position: "relative", flex: 1 }, children: [
          /* @__PURE__ */ jsx8(
            Input,
            {
              value: searchValue,
              onChange: handleInputChange,
              onKeyPress: handleKeyPress,
              placeholder,
              style: {
                paddingLeft: "var(--space-10)"
              }
            }
          ),
          /* @__PURE__ */ jsx8(
            "div",
            {
              style: {
                position: "absolute",
                left: "var(--space-3)",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none"
              },
              children: /* @__PURE__ */ jsx8(Icon, { name: "search", size: "sm" })
            }
          )
        ] }),
        /* @__PURE__ */ jsx8(
          Button,
          {
            variant: "solid",
            onClick: handleSearch,
            disabled: loading,
            style: {
              minWidth: "auto",
              padding: "var(--space-3)"
            },
            children: loading ? /* @__PURE__ */ jsx8(Icon, { name: "clock", size: "sm" }) : /* @__PURE__ */ jsx8(Icon, { name: "search", size: "sm" })
          }
        )
      ]
    }
  );
};

// src/organisms/Header/Header.tsx
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var Header = ({
  title = "App",
  logo,
  user,
  onMenuClick,
  onUserClick,
  actions,
  className = ""
}) => {
  return /* @__PURE__ */ jsxs3(
    "header",
    {
      className: `neshiness-header ${className}`,
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "var(--space-4) var(--space-6)",
        backgroundColor: "var(--color-surface)",
        borderBottom: "1px solid var(--color-muted)",
        minHeight: "64px"
      },
      children: [
        /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-4)" }, children: [
          onMenuClick && /* @__PURE__ */ jsx9(
            Button,
            {
              variant: "ghost",
              onClick: onMenuClick,
              style: {
                minWidth: "auto",
                padding: "var(--space-2)"
              },
              children: /* @__PURE__ */ jsx9(Icon, { name: "menu", size: "md" })
            }
          ),
          logo && /* @__PURE__ */ jsx9("div", { style: { display: "flex", alignItems: "center" }, children: logo }),
          /* @__PURE__ */ jsx9(
            "h1",
            {
              style: {
                margin: "0",
                fontSize: "20px",
                fontWeight: "600",
                color: "var(--color-text)"
              },
              children: title
            }
          )
        ] }),
        actions && /* @__PURE__ */ jsx9("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-2)" }, children: actions }),
        user && /* @__PURE__ */ jsxs3("div", { style: { display: "flex", alignItems: "center", gap: "var(--space-3)" }, children: [
          /* @__PURE__ */ jsxs3("div", { style: { textAlign: "right" }, children: [
            /* @__PURE__ */ jsx9(
              "div",
              {
                style: {
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "var(--color-text)"
                },
                children: user.name
              }
            ),
            user.email && /* @__PURE__ */ jsx9(
              "div",
              {
                style: {
                  fontSize: "12px",
                  color: "var(--color-text)",
                  opacity: 0.7
                },
                children: user.email
              }
            )
          ] }),
          /* @__PURE__ */ jsx9(
            Button,
            {
              variant: "ghost",
              onClick: onUserClick,
              style: {
                minWidth: "auto",
                padding: "var(--space-1)"
              },
              children: /* @__PURE__ */ jsx9(
                Avatar,
                {
                  src: user.avatar,
                  fallback: user.name.charAt(0).toUpperCase(),
                  size: "md"
                }
              )
            }
          )
        ] })
      ]
    }
  );
};
export {
  Avatar,
  Badge,
  Button,
  Card,
  Header,
  Icon,
  Input,
  SearchBox,
  Spinner
};
