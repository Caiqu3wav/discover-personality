//@ts-ignore
import { create } from 'zustand';
import { determineMbtiType, getTopThreeMbtiTypes } from '../utils/index';
import { questions1, questions2 } from '../components/test/questions';
import { Answer } from '../interfaces';


interface FunctionScores {
  Fe: number;
  Te: number;
  Ne: number;
  Se: number;
  Fi: number;
  Ti: number;
  Si: number;
  Ni: number;
}

interface StoreState {
  mbtiType: string;
  mbtiTypeLink: string;
  topThreeMbtiTypes: any[];
  rangePoints: number[];
  currentQuestionIndex: number;
  selectedAnswers: Answer[];
  functionScores: FunctionScores;
  updateMbtiTypes: (mbtiType: string) => void;
  updateMbtiTypeLink: (mbtiTypeLink: string) => void;
  updateTopThreeMbtiTypes: (topThreeMbtiTypes: string[]) => void;
  updateRangePoints: (index: number, value: number) => void;
  updateCurrentQuestionIndex: (index: number) => void;
  updateSelectedAnswers: (index: number, answer: Answer) => void;
  updateFunctionScores: (answer: Answer) => void;
  finalizeTest: (router, link) => void;
}

const useStore = create<StoreState>((set) => ({
    mbtiType: "",
    mbtiTypeLink: "",
    topThreeMbtiTypes: [],
    rangePoints: Array(questions2.length).fill(50),
  currentQuestionIndex: 0,
  selectedAnswers: Array(questions1.length).fill(""),
  functionScores: {
    Fe: 0,
    Te: 0,
    Ne: 0,
    Se: 0,
    Fi: 0,
    Ti: 0,
    Si: 0,
    Ni: 0,
  },
  updateMbtiTypes: (mbtiType) => set({ mbtiType }),
  updateMbtiTypeLink: (mbtiTypeLink) => set({ mbtiTypeLink }),
  updateTopThreeMbtiTypes: (topThreeMbtiTypes) => set({ topThreeMbtiTypes }),
  updateRangePoints: (index: any, value: any) => set((state) => {
    const newRangePoints = [...state.rangePoints];
    newRangePoints[index] = value;
    return { rangePoints: newRangePoints };
  }),
  updateCurrentQuestionIndex: (index: any) => set({ currentQuestionIndex: index }),
  updateSelectedAnswers: (index: any, answer: Answer) => set((state: any) => {
    const newSelectedAnswers = [...state.selectedAnswers];
    newSelectedAnswers[index] = answer;
    return { selectedAnswers: newSelectedAnswers };
  }),
  updateFunctionScores: (answer: Answer) => set((state) => {
    const newFunctionScores = { ...state.functionScores };
    newFunctionScores[answer.cogFunction] += 1;
    return { functionScores: newFunctionScores };
  }),
  finalizeTest: (router, link) => {
    set((state) => {
      const { currentType, currentTypeLink } = determineMbtiType(state.functionScores);
      const topThreeMbtiTypes = getTopThreeMbtiTypes(state.functionScores);

      return {
        ...state,
        mbtiType: currentType,
        mbtiTypeLink: currentTypeLink,
        topThreeMbtiTypes: topThreeMbtiTypes,
      };
    });
    router.push(link);
  },

}));
export default useStore;