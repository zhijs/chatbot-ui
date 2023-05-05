export interface FolderInterface {
  id: string;
  name: string;
  type: FolderType;
  isDefault?: number;
}

export type FolderType = 'chat' | 'prompt';
