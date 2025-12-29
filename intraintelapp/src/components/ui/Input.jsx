import React from 'react';
import { motion } from 'framer-motion';

const Input = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    placeholder,
    required = false,
    className = '',
    error,
    ...props
}) => {
    const isTextarea = type === 'textarea';
    const Component = isTextarea ? 'textarea' : 'input';

    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-xs mb-2 font-semibold text-text-medium">
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}
            <Component
                name={name}
                type={!isTextarea ? type : undefined}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
                className={`
          w-full rounded-xl border border-muted px-4 py-3 text-sm bg-white 
          placeholder:text-text-light transition-all duration-200 
          focus:outline-none focus:border-brand-blue focus:shadow-[0_6px_18px_rgba(13,110,253,0.08)]
          ${error ? 'border-red-500 focus:border-red-500' : ''}
          ${isTextarea ? 'resize-none' : ''}
        `}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
