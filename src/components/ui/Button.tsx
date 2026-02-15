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
    const baseStyles = "inline-flex items-center justify-center border font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-heading";

    const variants = {
        primary: "border-transparent text-white bg-neutral-dark hover:bg-gray-800 focus:ring-neutral-dark shadow-sm hover:shadow-md",
        secondary: "border-gray-300 text-neutral-dark bg-white hover:bg-gray-50 focus:ring-neutral-dark shadow-sm",
        tertiary: "border-transparent text-primary-blue bg-transparent hover:underline px-0 py-0 font-medium",
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
