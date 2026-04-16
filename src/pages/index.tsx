import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const DOMAINS = [
    { label: 'Backend', desc: 'APIs, microservicios, auth' },
    { label: 'Frontend', desc: 'Angular, UI/UX, arquitectura' },
    { label: 'Data', desc: 'ETL, pipelines, BI, ML' },
    { label: 'DevOps', desc: 'CI/CD, infra, monitoreo' },
    { label: 'Architecture', desc: 'ADRs, diagramas, decisiones' },
];

function DomainPill({ label, desc }: { label: string; desc: string }) {
    return (
        <div className={styles.domainPill}>
            <span className={styles.domainLabel}>{label}</span>
            <span className={styles.domainDesc}>{desc}</span>
        </div>
    );
}

function HomepageHeader() {
    return (
        <header className={styles.hero}>
            {/* Background layers */}
            <div className={styles.gridBg} aria-hidden />
            <div className={styles.gradientBloom} aria-hidden />
            <div className={styles.scanlines} aria-hidden />

            <div className={styles.heroInner}>
                {/* Top badge */}
                <div className={styles.badge}>
                    <span className={styles.badgeDot} />
                    <span>Plataforma de documentación técnica</span>
                </div>

                {/* Logo */}
                <div className={styles.logoWrap}>
                    <img
                        src="/img/png/logo.png"
                        alt="CoderDocs Logo"
                        height={120}
                        width={320}
                        className={styles.logo}
                    />
                </div>

                {/* Headline */}
                <Heading as="h1" className={styles.headline}>
                    <span className={styles.headlineLine1}>Documenta.</span>
                    <span className={styles.headlineLine2}>Escala.</span>
                    <span className={styles.headlineLine3}>Domina tu</span>
                    <em className={styles.em}>stack.</em>
                </Heading>

                {/* Subtitle */}
                <p className={styles.subtitle}>
                    CoderDocs centraliza el conocimiento técnico de tu equipo —{' '}
                    <strong>backend, frontend, data y DevOps</strong> — en un único lugar
                    estructurado y siempre actualizado.
                </p>

                {/* Domain pills */}
                <div className={styles.domains}>
                    {DOMAINS.map((d) => (
                        <DomainPill key={d.label} {...d} />
                    ))}
                </div>

                {/* CTAs */}
                <div className={styles.ctas}>
                    <Link className={clsx(styles.ctaPrimary)} to="/docs/intro">
                        <span>Explorar Docs</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>
                    <Link
                        className={clsx(styles.ctaSecondary)}
                        href="https://github.com/TU-REPO/coderdocs"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        <span>Contribuir</span>
                    </Link>
                </div>

                {/* Stats row */}
                <div className={styles.statsRow}>
                    <div className={styles.stat}>
                        <span className={styles.statValue}>5</span>
                        <span className={styles.statLabel}>dominios</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statValue}>1</span>
                        <span className={styles.statLabel}>fuente de verdad</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statValue}>∞</span>
                        <span className={styles.statLabel}>escalabilidad</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Inicio | ${siteConfig.title}`}
            description="CoderDocs - Plataforma de documentación técnica para developers y data engineers"
        >
            <HomepageHeader />
            {/*<main>
                <HomepageFeatures />
            </main>*/}
        </Layout>
    );
}