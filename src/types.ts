type Instruction = {
  step: string;
  instruction: string;
};

export type Recipe = {
  id: number;
  recipe_name: string;
  ingredients: string[];
  cooking_instructions: Instruction[];
  imageURL: string;
};
