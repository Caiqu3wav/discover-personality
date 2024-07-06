'use client'
import { useRouter } from 'next/navigation';
import useStore from '../Store/MbtiStore';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import { useEffect } from 'react';
import Header from '../components/Header/header';
import PersonalitiesHome from '../components/PersonalitiesHome/PersonalitiesHome';

export default function ResultPage() {
  const { mbtiType, topThreeMbtiTypes, functionScores } = useStore();
  const router = useRouter();

  useEffect(() => {  
  if (!mbtiType) {
    router.push('/testpage');
  }
}, [mbtiType, router]);

if (!mbtiType) {
  return null;
}


const chartData = {
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
    <div className="flex flex-col gap-3 pb-3">
      <Header/>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl">Seu tipo MBTI é: {mbtiType}</h1>
      <h2 className="text-2xl mt-4">Top 3 tipos compatíveis:</h2>
      <ul className="mt-2">
        {topThreeMbtiTypes.map((typeObj, index) => (
          <li key={index} className="text-xl">{typeObj.type}</li>
        ))}
      </ul>
      <div className="mt-6">
        <h2 className="text-2xl">Pontuação das Funções Cognitivas:</h2>
        <ul className="mt-2">
          {Object.keys(functionScores).map((func, index) => (
            <li key={index} className="text-lg">{func}: {functionScores[func]}</li>
          ))}
        </ul>
      </div>
      <div className="w-1/2 mt-6">
        <Bar data={chartData} />
      </div>
    </div>
    <PersonalitiesHome/>
    </div>
  );
}
