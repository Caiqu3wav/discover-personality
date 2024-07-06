import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function redirectToMbtiType(mbtiTypeLink) {
  const router = useRouter();
  router.push(mbtiTypeLink);
};

const mbtiFunctions = {
  ISTJ: ["Si", "Te", "Fi", "Ne"],
  INTJ: ["Ni", "Te", "Fi", "Se"],
  ESTJ: ["Te", "Si", "Ne", "Fi"],
  ENTJ: ["Te", "Ni", "Se", "Fi"],
  ISFJ: ["Si", "Fe", "Ti", "Ne"],
  INFJ: ["Ni", "Fe", "Ti", "Se"],
  ESFJ: ["Fe", "Si", "Ne", "Ti"],
  ENFJ: ["Fe", "Ni", "Se", "Ti"],
  INTP: ["Ti", "Ne", "Si", "Fe"],
  INFP: ["Fi", "Ne", "Si", "Te"],
  ENTP: ["Ne", "Ti", "Fe", "Si"],
  ENFP: ["Ne", "Fi", "Te", "Si"],
  ISTP: ["Ti", "Se", "Ni", "Fe"],
  ISFP: ["Fi", "Se", "Ni", "Te"],
  ESTP: ["Se", "Ti", "Fe", "Ni"],
  ESFP: ["Se", "Fi", "Te", "Ni"]
};

export const determineMbtiType = (functionScores) => {
    let currentType = "";
    let currentTypeLink = "";

    const mbtiTypes = Object.keys(mbtiFunctions);
    let maxScore = -Infinity;


  mbtiTypes.forEach((type) => {
    const functions = mbtiFunctions[type];
    const score = functions.reduce((acc, func) => acc + (functionScores[func] || 0), 0);

    if (score > maxScore) {
      maxScore = score;
      currentType = type;
      currentTypeLink = "/result";
    }
  });

  return { currentType, currentTypeLink };
  };

  
export const getTopThreeMbtiTypes = (functionScores) => {
  const mbtiTypes = Object.keys(mbtiFunctions);

  const mbtiScores = mbtiTypes.map((type) => {
    const functions = mbtiFunctions[type];
    const score = functions.reduce((acc, func) => acc + (functionScores[func] || 0), 0);
    return { type, score };
  });

  // Ordenar os tipos MBTI com base na pontuação
  mbtiScores.sort((a, b) => b.score - a.score);

  // Retornar os três tipos MBTI com maior pontuação
  return mbtiScores.slice(0, 3);
};

 export const updateUserMbti = async (userId, mbtiType) => {
      try {
          const res = await axios.put(`${process.env.NEXT_PUBLIC_SPRING_API_URL}/api/users/update-mbti/${userId}`, {
             mbtiType: mbtiType
            });
          if (res.status === 200) {
            console.log('Tipo MBTI do usuário atualizado com sucesso');
            return res.data;
            } else {
              console.error('Erro ao atualizar o tipo MBTI do usuário');
            }
      } catch (error) {
        console.error("Erro ao atualizar mbti do usuário", error)
      }
 }