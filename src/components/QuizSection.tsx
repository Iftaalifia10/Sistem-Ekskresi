import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/excretionData';
import { CheckCircle2, XCircle, RotateCcw, HelpCircle, Trophy, Sparkles } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [organFilter, setOrganFilter] = useState<string>('Semua');
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const filteredQuestions = QUIZ_QUESTIONS.filter(
    (q) => organFilter === 'Semua' || q.organTag === organFilter
  );

  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const handleResetQuiz = () => {
    setUserAnswers({});
    setShowResults(false);
  };

  // Calculate score
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = filteredQuestions.filter(
    (q) => userAnswers[q.id] === q.correctIndex
  ).length;
  const scorePercent = filteredQuestions.length > 0 ? Math.round((correctCount / filteredQuestions.length) * 100) : 0;

  return (
    <section id="quiz" className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              <span>Uji Pemahaman Siswa</span>
              <span aria-hidden="true">·</span>
              <span>Latihan Soal IPA Kelas 8</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-['Outfit']">
              Kuis Evaluasi Sistem Ekskresi
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Uji ketuntasan materi dengan 12 soal pilihan ganda standar ulangan harian & asesmen IPA SMP.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/80 rounded-lg self-start md:self-auto overflow-x-auto no-scrollbar">
            {['Semua', 'Ginjal', 'Kulit', 'Paru-Paru', 'Hati'].map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setOrganFilter(tag);
                  setUserAnswers({});
                  setShowResults(false);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  organFilter === tag
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Score Summary Banner if user submitted or answered all */}
        {(showResults || answeredCount === filteredQuestions.length) && (
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-xl shadow-xs ${
                scorePercent >= 80 ? 'bg-emerald-100 text-emerald-800' : scorePercent >= 60 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
              }`}>
                <Trophy className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Hasil Evaluasi Kamu:
                </span>
                <div className="text-2xl font-extrabold text-slate-900 font-['Outfit']">
                  Skor: <span className="text-sky-600">{scorePercent} / 100</span> ({correctCount} dari {filteredQuestions.length} Benar)
                </div>
                <p className="text-xs text-slate-600 mt-0.5">
                  {scorePercent >= 80
                    ? '🎉 Luar biasa! Pemahamanmu tentang materi sistem ekskresi sudah sangat matang!'
                    : scorePercent >= 60
                    ? '👍 Cukup bagus! Pelajari kembali pembahasan di bawah untuk menyempurnakan nilaimu.'
                    : '💪 Tetap semangat! Coba baca kembali materi tiap organ dan ulangi kuis ini.'}
                </p>
              </div>
            </div>

            <button
              onClick={handleResetQuiz}
              className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 flex items-center gap-2 cursor-pointer shrink-0"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Ulangi Kuis</span>
            </button>
          </div>
        )}

        {/* Question Cards List */}
        <div className="space-y-6">
          {filteredQuestions.map((q, idx) => {
            const selectedOpt = userAnswers[q.id];
            const hasAnswered = selectedOpt !== undefined;
            const isCorrect = selectedOpt === q.correctIndex;

            return (
              <div
                key={q.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                      {q.question}
                    </h3>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md shrink-0">
                    {q.organTag}
                  </span>
                </div>

                {/* Options List */}
                <div className="space-y-2 pl-0 sm:pl-10">
                  {q.options.map((option, optIdx) => {
                    const isOptionSelected = selectedOpt === optIdx;
                    const isOptionCorrect = q.correctIndex === optIdx;

                    let btnStyle = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800';

                    if (hasAnswered) {
                      if (isOptionCorrect) {
                        btnStyle = 'border-emerald-400 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-300';
                      } else if (isOptionSelected) {
                        btnStyle = 'border-rose-400 bg-rose-50 text-rose-950 font-semibold ring-1 ring-rose-300';
                      } else {
                        btnStyle = 'border-slate-200 text-slate-400 opacity-60';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={hasAnswered}
                        onClick={() => handleSelectAnswer(q.id, optIdx)}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full border border-current text-[11px] font-bold flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{option}</span>
                        </div>

                        {hasAnswered && isOptionCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {hasAnswered && isOptionSelected && !isOptionCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Feedback & Explanation Box */}
                {hasAnswered && (
                  <div className={`mt-3 p-4 rounded-xl border text-xs leading-relaxed ml-0 sm:ml-10 ${
                    isCorrect ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950' : 'bg-rose-50/70 border-rose-200 text-rose-950'
                  }`}>
                    <div className="flex items-center gap-1.5 font-bold mb-1">
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>Jawaban Kamu Benar!</span>
                        </>
                      ) : (
                        <>
                          <XCircle className="w-4 h-4 text-rose-600" />
                          <span>Jawaban Kurang Tepat. (Kunci: {String.fromCharCode(65 + q.correctIndex)})</span>
                        </>
                      )}
                    </div>
                    <p className="mt-1 text-slate-700">
                      <strong>Penjelasan Konsep:</strong> {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
