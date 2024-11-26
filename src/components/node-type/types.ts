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
  }
}