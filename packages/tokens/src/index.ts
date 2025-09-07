export const tokens = {
  color: {
    accent: { base: '#FF7A00', hover: '#FF8F26', active: '#CC6200' },
    bg: '#0B0B0C',
    surface: '#151517',
    text: '#EDEDEF',
    muted: '#2A2A2E',
    success: '#22C55E',
    warning: '#F59E0B',
    danger: '#EF4444',
    info: '#3B82F6'
  },
  radius: { sm: '4px', md: '8px', lg: '12px' },
  space: { 1: '4px', 2: '8px', 3: '12px', 4: '16px', 5: '20px', 6: '24px', 7: '32px', 8: '40px' },
  shadow: { 1: '0 1px 2px rgba(0,0,0,0.3)', 2: '0 4px 8px rgba(0,0,0,0.35)', 3: '0 8px 16px rgba(0,0,0,0.4)' },
  font: { sans: "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'", mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace" }
} as const;
export type Tokens = typeof tokens;
export default tokens;
