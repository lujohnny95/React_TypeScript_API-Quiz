//randomly shuffle the order of questions
export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5);