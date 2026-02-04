
export type AITool = 'ChatGPT' | 'Gemini' | 'Midjourney' | 'Claude' | 'Stable Diffusion';
export type Tone = 'Professional' | 'Creative' | 'Friendly' | 'Formal' | 'Direct' | 'Inspirational';
export type OutputType = 'Code' | 'Content' | 'Image Prompt' | 'Marketing Copy' | 'Email' | 'Research';
export type SkillLevel = 'Beginner' | 'Advanced' | 'Expert';

export interface GeneratorParams {
  goal: string;
  aiTool: AITool;
  tone: Tone;
  outputType: OutputType;
  skillLevel: SkillLevel;
}

export interface UseCase {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}
