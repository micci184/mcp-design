import React from 'react';

// コンポーネントのプロパティの型定義
interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'a' | 'small';
  children: React.ReactNode;
  className?: string;
  href?: string; // for 'a' variant
}

// スタイルをマッピングするオブジェクト
const variantMapping = {
  h1: 'text-4xl font-bold text-text-default',
  h2: 'text-3xl font-bold text-text-default',
  h3: 'text-2xl font-semibold text-text-default',
  p: 'text-base font-normal text-text-default',
  a: 'text-base font-normal text-brand-text underline',
  small: 'text-sm font-normal text-text-secondary',
};

export const Typography: React.FC<TypographyProps> = ({ variant, children, className, href }) => {
  // variant に応じてHTMLタグを動的に選択
  const Component = variant === 'a' ? 'a' : variant;

  // スタイルクラスを結合
  const styleClasses = `${variantMapping[variant]} ${className || ''}`.trim();

  const props = {
    className: styleClasses,
    ...(variant === 'a' && { href }),
  };

  return <Component {...props}>{children}</Component>;
};
