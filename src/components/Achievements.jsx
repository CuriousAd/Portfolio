import React from 'react';
import {
  FiExternalLink,
  FiAward,
  FiTrendingUp,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiGithub
} from 'react-icons/fi';
import {
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiCodechef
} from 'react-icons/si';
import BlurFade from './react-bits/BlurFade';
import SpotlightCard from './react-bits/SpotlightCard';
import { codingProfiles, achievementsList } from '../data/achievements';
import githubContributionsImg from '../assets/github-contributions.png';
import '../styles/Achievements.css';

const profileIcons = {
  leetcode: <SiLeetcode />,
  codeforces: <SiCodeforces />,
  geeksforgeeks: <SiGeeksforgeeks />,
  codechef: <SiCodechef />
};

const achievementIcons = [
  <FiAward key="award" />,
  <FiTrendingUp key="trend" />,
  <FiCpu key="cpu" />,
  <FiCheckCircle key="check" />
];

export const Achievements = () => {
  return (
    <section className="section" id="achievements">
      <div className="container">
        {/* Section Header */}
        <BlurFade className="section-header">
          <span className="section-tag">
            <FiAward size={12} /> Algorithmic Rigor & Milestones
          </span>
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Coding Profiles</span>
          </h2>
        </BlurFade>

        {/* 1. Coding Profiles Grid */}
        <div className="profiles-sub-header">
          <span className="profiles-sub-title">
            <FiCode size={14} /> Competitive Programming Profiles
          </span>
        </div>

        <div className="coding-profiles-grid">
          {codingProfiles.map((profile, index) => (
            <BlurFade key={profile.id} delay={index * 0.08} style={{ display: 'flex' }}>
              <SpotlightCard className="coding-profile-card">
                <div className="profile-card-top">
                  <div className="profile-icon-wrap">
                    {profileIcons[profile.id]}
                  </div>
                </div>

                <div className="profile-card-content">
                  <h3 className="profile-name">{profile.name}</h3>
                  <div className="profile-handle-row">
                    <span className="profile-handle">@{profile.handle}</span>
                    <span className="profile-highlight-dot">•</span>
                    <span className="profile-highlight-tag">{profile.highlight}</span>
                  </div>
                  <p className="profile-desc">{profile.description}</p>
                </div>

                <div className="profile-card-footer">
                  <a
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="profile-link-btn"
                  >
                    <span>View Profile</span>
                    <FiExternalLink size={12} />
                  </a>
                </div>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>

        {/* 2. Open Source & GitHub Contributions Card */}
        <BlurFade delay={0.22}>
          <SpotlightCard className="github-contributions-card">
            <div className="github-card-header">
              <div className="github-header-left">
                <div className="github-icon-box">
                  <FiGithub size={20} />
                </div>
                <div>
                  <div className="github-title-row">
                    <h3 className="github-card-title">GitHub Open Source Activity</h3>
                    <span className="github-stat-badge">871+ Contributions in past year</span>
                  </div>
                  <p className="github-card-subtitle">
                    Active repository maintenance, daily commit streak, and production engineering consistency.
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/CuriousAd"
                target="_blank"
                rel="noopener noreferrer"
                className="github-profile-btn"
              >
                <span>@CuriousAd</span>
                <FiExternalLink size={13} />
              </a>
            </div>

            <div className="github-graph-wrapper">
              <img
                src={githubContributionsImg}
                alt="871 contributions in the last year on GitHub"
                className="github-graph-img"
                loading="lazy"
              />
            </div>
          </SpotlightCard>
        </BlurFade>

        {/* 3. Key Leadership & Achievements Grid */}
        <div className="achievements-sub-header">
          <span className="profiles-sub-title">
            <FiAward size={14} /> Leadership & Key Roles
          </span>
        </div>

        <div className="achievements-cards-grid">
          {achievementsList.map((item, index) => (
            <BlurFade key={item.id} delay={0.28 + index * 0.08} style={{ display: 'flex' }}>
              <SpotlightCard className="achievement-item-card">
                <div className="achievement-card-header">
                  <div className="achievement-meta-left">
                    <div className="achievement-icon-box">
                      {achievementIcons[index % achievementIcons.length]}
                    </div>
                    <span className="achievement-category-tag">{item.category}</span>
                  </div>
                  <span className="achievement-metric-pill">{item.metric}</span>
                </div>

                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </SpotlightCard>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
