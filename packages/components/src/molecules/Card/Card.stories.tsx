import { Card } from './Card';
import { Button } from '../../atoms/Button/Button';
import { Badge } from '../../atoms/Badge/Badge';
import React from 'react';

export default {
  title: 'Molecules/Card',
  component: Card,
};

export const Default = {
  render: () => (
    <Card>
      <h3 style={{ margin: '0 0 8px 0', color: 'var(--color-text)' }}>Card Title</h3>
      <p style={{ margin: '0 0 16px 0', color: 'var(--color-text)', opacity: 0.8 }}>
        This is a default card with some content.
      </p>
      <Button variant="solid">Action</Button>
    </Card>
  )
};

export const Elevated = {
  render: () => (
    <Card variant="elevated">
      <h3 style={{ margin: '0 0 8px 0', color: 'var(--color-text)' }}>Elevated Card</h3>
      <p style={{ margin: '0 0 16px 0', color: 'var(--color-text)', opacity: 0.8 }}>
        This card has more elevation and no border.
      </p>
      <Button variant="outline">Action</Button>
    </Card>
  )
};

export const Outlined = {
  render: () => (
    <Card variant="outlined">
      <h3 style={{ margin: '0 0 8px 0', color: 'var(--color-text)' }}>Outlined Card</h3>
      <p style={{ margin: '0 0 16px 0', color: 'var(--color-text)', opacity: 0.8 }}>
        This card has no shadow, just a border.
      </p>
      <Button variant="ghost">Action</Button>
    </Card>
  )
};

export const WithBadge = {
  render: () => (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
        <h3 style={{ margin: '0', color: 'var(--color-text)' }}>Card with Badge</h3>
        <Badge variant="success">New</Badge>
      </div>
      <p style={{ margin: '0 0 16px 0', color: 'var(--color-text)', opacity: 0.8 }}>
        This card includes a badge component.
      </p>
      <Button variant="solid">Action</Button>
    </Card>
  )
};

export const SmallPadding = {
  render: () => (
    <Card padding="sm">
      <h3 style={{ margin: '0 0 8px 0', color: 'var(--color-text)' }}>Small Padding</h3>
      <p style={{ margin: '0', color: 'var(--color-text)', opacity: 0.8 }}>
        This card has minimal padding.
      </p>
    </Card>
  )
};

export const LargePadding = {
  render: () => (
    <Card padding="lg">
      <h3 style={{ margin: '0 0 16px 0', color: 'var(--color-text)' }}>Large Padding</h3>
      <p style={{ margin: '0 0 24px 0', color: 'var(--color-text)', opacity: 0.8 }}>
        This card has generous padding for more spacious content.
      </p>
      <Button variant="solid">Action</Button>
    </Card>
  )
};
