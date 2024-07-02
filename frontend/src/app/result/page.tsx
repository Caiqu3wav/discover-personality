import { useRouter } from 'next/router';
import useStore from '../Store/MbtiStore';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

export default function ResultPage() {
  const { mbtiType, topThreeMbtiTypes, functionScores } = useStore();
  const router = useRouter();

  if (!mbtiType) {
    router.push('/');
    return null;
  }

  const data = {
    labels: Object.keys(functionScores),
    datasets: [
      {
        label: 'Pontuação das Funções Cognitivas',
        data: Object.values(functionScores),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">Seu tipo MBTI é: {mbtiType}</h1>
      <h2 className="text-2xl mt-4">Top 3 tipos compatíveis:</h2>
      <ul className="mt-2">
        {topThreeMbtiTypes.map((type, index) => (
          <li key={index} className="text-xl">{type}</li>
        ))}
      </ul>
      <div className="w-1/2 mt-6">
        <Bar data={data} />
      </div>
    </div>
  );
}
