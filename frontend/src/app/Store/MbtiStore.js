import { create } from 'zustand';

const useStore = create((set) => ({
    mbtiType: "",
    mbtiTypeLink: "",
    topThreeMbtiTypes: [],
    rangePoints: Array(24).fill(50), // Supondo que você tenha 24 questões
  currentQuestionIndex: 0,
  selectedAnswers: Array(24).fill(""),
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
  updateRangePoints: (index, value) => set((state) => {
    const newRangePoints = [...state.rangePoints];
    newRangePoints[index] = value;
    return { rangePoints: newRangePoints };
  }),
  updateCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),
  updateSelectedAnswers: (index, answer) => set((state) => {
    const newSelectedAnswers = [...state.selectedAnswers];
    newSelectedAnswers[index] = answer;
    return { selectedAnswers: newSelectedAnswers };
  }),
  updateFunctionScores: (newScores) => set({ functionScores: newScores }),
  finalizeTest: () => set((state) => {
    const mbtiType = determineMbtiType(state.functionScores);
    const topThreeMbtiTypes = getTopThreeMbtiTypes(state.functionScores);
    return { mbtiType, topThreeMbtiTypes };
  })
}))

export default useStore;