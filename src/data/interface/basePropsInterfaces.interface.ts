export interface Resource {
  title: string;
  url: string;
}

export interface Subtopic {
  id: string;
  title: string;
  description?: string;
  resources?: Resource[];
}

export interface MainTopicNodeProps {
  data: {
    title: string;
    description?: string;
    subtopics?: Subtopic[];
    resources?: Resource[];
  };
}

export interface Data extends Record<string, unknown> {
    title: string;
    description?: string;
    subtopics: Subtopic[];
  }

export interface Position {
  x: number;
  y: number;
}

export interface RoadmapNodes {
  id: string;
  type: string;
  position: Position;
  data: Data;
}
