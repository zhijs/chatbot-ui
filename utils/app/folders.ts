import { FolderInterface } from '@/types/folder';

export const saveFolders = (folders: FolderInterface[]) => {
  localStorage.setItem('folders', JSON.stringify(folders));
};


export const defaultFoders: FolderInterface[] = [
  {
    id: '1',
    name: '营销文案',
    type: 'prompt',
    isDefault: 1
  }
]
