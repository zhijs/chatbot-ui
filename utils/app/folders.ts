import { FolderInterface } from '@/types/folder';

export const saveFolders = (folders: FolderInterface[]) => {
  const saveFolders = folders.filter((item) => {
    return !item.isDefault  
  })
  localStorage.setItem('folders', JSON.stringify(saveFolders));
};


export const defaultFoders: FolderInterface[] = [
  {
    id: '1',
    name: '营销文案',
    type: 'prompt',
    isDefault: 1
  }
]
