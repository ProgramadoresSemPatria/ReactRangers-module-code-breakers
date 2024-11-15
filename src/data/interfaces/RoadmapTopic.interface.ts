export interface RoadmapTopic {
  id: number;
  name: string;
  description?: string;
  level?: "beginner" | "intermediate" | "advanced" | "expert";
  resources?: string[];
  subtopics?: RoadmapTopic[];
}
