import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import "../styles/about.css";

const copy =
  "데이터렌즈는 민원 동향과 카테고리를 한 화면에서 보고 정리할 수 있게 만든 분석 서비스입니다.";

const features = ["동향", "카테고리", "검토", "이슈", "민원"] as const;

const areas = ["민원 동향", "카테고리", "이슈", "검토", "파일", "데이터"];

const spots = [
  { title: "대시보드", to: "/" },
  { title: "파일", to: "/files" },
  { title: "카테고리", to: "/categories" },
  { title: "검토", to: "/reviews" },
  { title: "이슈", to: "/issues" },
];

const introSteps = [
  {
    title: "데이터 분석 및 자동 집계",
    body: "복잡한 데이터도 파일 업로드만으로 분석을 시작하세요. 반복적인 집계 과정을 자동화해 주요 현황과 데이터 흐름을 빠르게 파악할 수 있습니다.",
    icon: "chart",
  },
  {
    title: "데이터 검토 및 이슈 확인",
    body: "분석 결과를 검토하고 주요 이슈를 한눈에 확인하세요. 놓치기 쉬운 확인 사항을 빠르게 파악해 데이터 검토의 효율성을 높일 수 있습니다.",
    icon: "check",
  },
  {
    title: "민원 유형 자동 분류",
    body: "민원 데이터를 유형별로 분류해 반복되는 문의와 주요 이슈를 쉽게 확인하세요. 수작업으로 분류하고 정리하는 시간을 줄여 문제 해결에 집중할 수 있습니다.",
    icon: "flow",
  },
  {
    title: "데이터 저장 및 관리",
    body: "분석한 데이터를 저장하고 필요할 때 다시 확인하세요. 데이터와 분석 결과를 체계적으로 관리해 반복 업무를 줄이고 지속적인 활용을 지원합니다.",
    icon: "file",
  },
] as const;

export function AboutPage() {
  const [feature, setFeature] = useState<(typeof features)[number]>("동향");

  return (
    <div className="page about">
      <section className="about-hero">
        <h1>DataLens 소개</h1>
        <p>{copy}</p>
        <div className="about-actions">
          <Button to="/">대시보드 보기</Button>
          <Button to="/signup" variant="secondary">
            회원가입
          </Button>
        </div>
      </section>

      <section className="about-feature" aria-labelledby="about-feature-title">
        <h2 id="about-feature-title">기능</h2>
        <div className="about-tabs" role="tablist" aria-label="기능">
          {features.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              className={item === feature ? "is-active" : undefined}
              aria-selected={item === feature}
              onClick={() => setFeature(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="about-stage" role="tabpanel">
          <p className="about-stage-label">{feature}</p>
          <p>{copy}</p>
        </div>
      </section>

      <div className="about-marquee" aria-hidden="true">
        <div className="about-marquee-track">
          {[...areas, ...areas].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="about-bento" aria-labelledby="about-bento-title">
        <h2 id="about-bento-title">DataLens 소개</h2>
        <div className="about-bento-grid">
          <article className="about-card about-card-lead">
            <h3>복잡한 민원 데이터 분석, 한 번에 해결하세요.</h3>
            <p>
              데이터 파일 업로드만으로 자동 집계부터 민원 유형 분류까지.
              <br />
              반복적인 데이터 정리 업무를 줄이고, 더 빠른 의사결정을 시작하세요.
            </p>
          </article>
          {introSteps.map((step, index) => (
            <article key={step.title} className="about-card about-step">
              <span className={`about-step-icon is-${step.icon}`} aria-hidden="true">
                <StepIcon name={step.icon} />
              </span>
              <div>
                <h3>
                  {index + 1}. {step.title}
                </h3>
                <p>{step.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-split" aria-labelledby="about-split-title">
        <h2 id="about-split-title">정리</h2>
        <div className="about-split-grid">
          <article className="about-card">
            <h3>동향</h3>
            <p>{copy}</p>
          </article>
          <article className="about-card">
            <h3>카테고리</h3>
            <p>{copy}</p>
          </article>
        </div>
      </section>

      <section className="about-quote">
        <blockquote>
          <p>{copy}</p>
        </blockquote>
      </section>

      <section className="about-stories" aria-labelledby="about-stories-title">
        <h2 id="about-stories-title">둘러보기</h2>
        <div className="about-story-grid">
          {spots.slice(0, 3).map((spot) => (
            <article key={spot.title} className="about-card">
              <h3>{spot.title}</h3>
              <p>{copy}</p>
              <Link to={spot.to}>이동</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="about-close">
        <h2>시작하기</h2>
        <p>{copy}</p>
        <div className="about-actions">
          <Button to="/">대시보드 보기</Button>
          <Button to="/signup" variant="secondary">
            회원가입
          </Button>
        </div>
      </section>
    </div>
  );
}

function StepIcon({ name }: { name: (typeof introSteps)[number]["icon"] }) {
  if (name === "chart") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19V5M4 19h16" />
        <path d="M8 15v-3M12 15V8M16 15v-5" />
      </svg>
    );
  }
  if (name === "check") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="6" y="4" width="12" height="16" rx="2" />
        <path d="M9 12.5l2 2 4-4.5" />
      </svg>
    );
  }
  if (name === "flow") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8a4 4 0 0 1 7-2l1 1" />
        <path d="M16 7h3v3" />
        <path d="M17 16a4 4 0 0 1-7 2l-1-1" />
        <path d="M8 17H5v-3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4h7l4 4v12H7z" />
      <path d="M14 4v4h4M9 13h6M9 17h6" />
    </svg>
  );
}
