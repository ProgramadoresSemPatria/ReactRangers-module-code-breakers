import { BaseEdge, EdgeProps, getBezierPath } from '@xyflow/react';
import useTheme from './useTheme';

export default function TopicEdge({
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });
  const { theme } = useTheme();
  return (
    <BaseEdge
      path={edgePath}
      markerEnd={markerEnd}
      style={{
        ...style,
        strokeWidth: 3,
        stroke: theme === 'dark' ? '#28d3a0' : '#4814b0',
        strokeDasharray: '0'
      }}
    />
  );
} 