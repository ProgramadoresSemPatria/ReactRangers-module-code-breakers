export interface ProgressContextType {
  progress: Record<string, number>;
  updateProgress: (id: string, value: number) => void;
}
