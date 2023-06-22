import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from './Header';

const questions = [
    { question: '약속이 없는 주말에 나는?', choices: ['주변에 연락해서 약속을 잡는다', '주변에 연락해서 약속을 잡는다']},
    { question: '친구의 소개로 소개팅에 나온 나는?', choices: ['말을 걸어올 때까지 기다리고 본다', '먼저 말 걸면서 분위기를 띄운다']},
    { question: '데이트 중 길에서 연인의 친구를 만난다면 나는?', choices: ['자연스럽게 웃으며 대한다', '무생물이 되어 조용히 있는다']},
    { question: '친구들과 노는 중에 맛있어보이는 밥집을 발견한 나는? ', choices: ['간판에서 맛집의 기운이 느껴진다 맛집 각이야', '유명하고 리뷰도 많으니까 맛은 보장되어 있겠군']},
    { question: '내가 본 영화를 궁금해하는 친구에게 나는?', choices: ['주인공이 좀비 바이러스가 퍼져서 치료하기 위한 영화야', '좀비랑 싸우는데 주인공이 완전 멋져 보는 내내 소름 돋았어']},
    { question: '친구의 생일선물을 고르게 된 나는?', choices: ['실용성은 없어도 예쁘고 기억에 남을 선물', '친구에게 요즘 가장 필요할 것 같은 선물']},
    { question: '연인과 사소한 일로 다퉜을 때 나는?', choices: ['나!! 진짜!! 너무!!! 화났어!!!!!', 'ㅇㅇ점은 꼭 고쳐줬으면 좋겠어 이렇게 하면 되잖아']},
    { question: '축 처진 친구가 우울하다고 말했을 때 나는?', choices: ['5초 만에 감정이입 완료. 같이 글썽거린다', '왜 우울해? 뭐 때문에 우울한 거야?']},
    { question: '이벤트를 준비한 나를 신나게 할 연인의 칭찬은?', choices: ['사랑해 최고야 나 완전 감동했어', '고마워 요즘 바쁠 텐데 언제 이런 걸 생각했어?']},
    { question: '데이트 룩을 고를 때 나는?', choices: ['전날부터 머리부터 발끝까지 세팅해 준다', '나가기 직전 마음에 드는 옷을 입는다']},
    { question: '연인이 집에 놀러온다고 했을때 나는??', choices: ['쓰레기 버리기부터 화장실 청소까지 한다', '보이는 곳만 일단 급하게 치워둔다']},
    { question: '친구와 해외여행 계획을 짜게 된 나는?', choices: ['할 거면 제대로! 일별로 세부 일정을 정리한다', '비행기 표만 끊어두고 계획의 80% 끝난다고 생각한다']},
];

function MbtiTest () {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleNext = () => {
    setCounter(counter + 1);
  };

  const Mbtistart = () => {
    navigate("/Mbtistart");
    }
    const Mbtidetail = () => {
        navigate("/Mbtidetail");
    }

  const handleAnswer = (choice) => {
    const convertedChoice = convertToMbtiChoice(choice);
    setAnswers([...answers, convertedChoice]);
    handleNext();
  };

  const convertToMbtiChoice = (choice) => {
    // 선택지를 MBTI 문자로 변환
    switch (choice) {
        case '주변에 연락해서 약속을 잡는다':
        case '자연스럽게 웃으며 대한다':
        case '먼저 말 걸면서 분위기를 띄운다':
            return 'E';
        case '침대랑 하루종일 물아일체가 된다':
        case '말을 걸어올 때까지 기다리고 본다':
        case '무생물이 되어 조용히 있는다':
            return 'I';
        case '간판에서 맛집의 기운이 느껴진다 맛집 각이야':
        case '좀비랑 싸우는데 주인공이 완전 멋져 보는 내내 소름 돋았어':
        case '실용성은 없어도 예쁘고 기억에 남을 선물':
            return 'S';
        case '유명하고 리뷰도 많으니까 맛은 보장되어 있겠군':
        case '좀비랑 싸우는데 주인공이 완전 멋져 보는 내내 소름 돋았어':
        case '친구에게 요즘 가장 필요할 것 같은 선물':
            return 'N';
        case '나!! 진짜!! 너무!!! 화났어!!!!!':
        case '5초 만에 감정이입 완료. 같이 글썽거린다':
        case '사랑해 최고야 나 완전 감동했어':
            return 'F';
        case 'ㅇㅇ점은 꼭 고쳐줬으면 좋겠어 이렇게 하면 되잖아':
        case '왜 우울해? 뭐 때문에 우울한 거야?':
        case '고마워 요즘 바쁠 텐데 언제 이런 걸 생각했어?':
            return 'T';
        case '전날부터 머리부터 발끝까지 세팅해 준다':
        case '쓰레기 버리기부터 화장실 청소까지 한다':
        case '할 거면 제대로! 일별로 세부 일정을 정리한다':
            return 'J';
        case '나가기 직전 마음에 드는 옷을 입는다':
        case '보이는 곳만 일단 급하게 치워둔다':
        case '비행기 표만 끊어두고 계획의 80% 끝난다고 생각한다':
            return 'P';
    }
  };
  const renderQuestion = () => {
    const currentQuestion = questions[counter];

    return (
      <div>
        <h3>질문 {counter + 1}</h3>
        <p>{currentQuestion.question}</p>

        <div>
          {currentQuestion.choices.map((choice, index) => (
            <button key={index} onClick={() => handleAnswer(choice)}>
              {choice}
            </button>
          ))}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    let dimensionE = 0;
    let dimensionS = 0;
    let dimensionT = 0;
    let dimensionJ = 0;

    answers.forEach((answer) => {
      if (answer === 'E') {
        dimensionE++;
      } else if (answer === 'I') {
        dimensionE--;
      } else if (answer === 'S') {
        dimensionS++;
      } else if (answer === 'N') {
        dimensionS--;
      } else if (answer === 'T') {
        dimensionT++;
      } else if (answer === 'F') {
        dimensionT--;
      } else if (answer === 'J') {
        dimensionJ++;
      } else if (answer === 'P') {
        dimensionJ--;
      }
    });

    const dimensionEResult = dimensionE > 0 ? 'E' : 'I';
    const dimensionSResult = dimensionS > 0 ? 'S' : 'N';
    const dimensionTResult = dimensionT > 0 ? 'T' : 'F';
    const dimensionJResult = dimensionJ > 0 ? 'J' : 'P';

    const mbtiResult = dimensionEResult + dimensionSResult + dimensionTResult + dimensionJResult;
    const Mbtisave = () => {
      localStorage.setItem('mbti', mbtiResult);
      Mbtidetail();
      }
    return (
      <div>
        <Header/>
        <h3>검사 결과</h3>
        <p>당신의 MBTI 유형은: {mbtiResult}</p>
        <button id='MbtiresultButton1' onClick={Mbtistart}>다시하기</button>
        <button id='MbtiresultButton2' onClick={Mbtisave}>자세히 보기</button>
      </div>
    );
  };

  return (
    <div>
        {counter < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
};

export default MbtiTest;
