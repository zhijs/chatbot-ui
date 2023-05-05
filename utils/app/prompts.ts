import { Prompt } from '@/types/prompt';
import { OpenAIModels } from '@/types/openai';
export const updatePrompt = (updatedPrompt: Prompt, allPrompts: Prompt[]) => {
  const updatedPrompts = allPrompts.map((c) => {
    if (c.id === updatedPrompt.id) {
      return updatedPrompt;
    }

    return c;
  });

  savePrompts(updatedPrompts);

  return {
    single: updatedPrompt,
    all: updatedPrompts,
  };
};

export const savePrompts = (prompts: Prompt[]) => {
  localStorage.setItem('prompts', JSON.stringify(prompts));
};

export const defaultPrompts: Prompt[] = [
  {
    id: '1',
    name: 'Slogan 文案',
    description: 'AI 生成 Slogan 文案',
    content: '现在你是一名Slogan创作师，{{公司名称}}是一家生产{{产品名称}}的企业，需要你为他们设计一个具有代表性且富有创意的Slogan。请充分了解公司的核心价值观: {{公司核心价值观}}和产品特点:{{产品特点}}，以此为基础，结合公司的行业地位： {{行业地位}}和目标客户, 目标客户是：{{目标客户}}，为其创作一个简短、醒目的Slogan。',
    model: OpenAIModels['gpt-3.5-turbo'],
    folderId: '1',
    isDefault: 1
  },
  {
    id: '1',
    name: '活动促销文案',
    description: 'AI 活动促销文案',
    content: '现在你是一个活动促销文案撰写师，请根据{{品牌名称}}品牌即将举行的周年庆活动，针对其主打产品{{主打产品名称}}，撰写一篇具有吸引力的促销文案。文案应该突出活动的特点、优惠力度以及产品亮点，同时在字数上保持精简，吸引顾客参与活动',
    model: OpenAIModels['gpt-3.5-turbo'],
    folderId: '1',
    isDefault: 1
  }
]