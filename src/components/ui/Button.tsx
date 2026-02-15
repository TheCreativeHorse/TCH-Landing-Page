import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center border font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-heading uppercase tracking-wide";

    const variants = {
        primary: "border-transparent text-white bg-primary-blue hover:bg-blue-600 focus:ring-primary-blue shadow-sm",
        secondary: "border-primary-blue text-primary-blue bg-transparent hover:bg-blue-50 focus:ring-primary-blue",
        tertiary: "border-transparent text-primary-blue bg-transparent hover:underline px-0 py-0 font-medium normal-case tracking-normal",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    // If tertiary, remove padding from sizes unless overridden
    const combinedClassName = `${baseStyles} ${variants[variant]} ${variant === 'tertiary' ? '' : sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

    return (
        <button
            className={combinedClassName}
            {...props}
        >
            {children}
        </button>
    );
};
