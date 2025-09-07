declare const tokens: {
    readonly color: {
        readonly accent: {
            readonly base: "#FF7A00";
            readonly hover: "#FF8F26";
            readonly active: "#CC6200";
        };
        readonly bg: "#0B0B0C";
        readonly surface: "#151517";
        readonly text: "#EDEDEF";
        readonly muted: "#2A2A2E";
        readonly success: "#22C55E";
        readonly warning: "#F59E0B";
        readonly danger: "#EF4444";
        readonly info: "#3B82F6";
    };
    readonly radius: {
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
    };
    readonly space: {
        readonly 1: "4px";
        readonly 2: "8px";
        readonly 3: "12px";
        readonly 4: "16px";
        readonly 5: "20px";
        readonly 6: "24px";
        readonly 7: "32px";
        readonly 8: "40px";
    };
    readonly shadow: {
        readonly 1: "0 1px 2px rgba(0,0,0,0.3)";
        readonly 2: "0 4px 8px rgba(0,0,0,0.35)";
        readonly 3: "0 8px 16px rgba(0,0,0,0.4)";
    };
    readonly font: {
        readonly sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'";
        readonly mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace";
    };
};
type Tokens = typeof tokens;

export { type Tokens, tokens as default, tokens };
