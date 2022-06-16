import ingredientMeasurements from 'conversion/ingredientMeasurements.json';
import volumeLitreValues from 'conversion/volumeLitreValues.json';
import weightGramValues from 'conversion/weightGramValues.json';
import { useForm } from 'react-hook-form';
import { Input } from 'postcss';
import React from 'react';

type SelectProps = {
    options: object;
};

function Select({ options }: SelectProps) {
    const optionNames = Object.keys(options);
    return (
        <select
            size={4}
            className="box-border w-1/2 appearance-none rounded border-transparent transition-all focus:border-transparent">
            {optionNames.map((name) => (
                <option
                    key={name}
                    value={name}
                    className="box-border rounded p-1">
                    {name}
                </option>
            ))}
        </select>
    );
}

function IngredientOptions() {
    return <Select options={ingredientMeasurements} />;
}

type MeasurementOptionsProps = {
    isVolume: boolean;
};

function MeasurementOptions({ isVolume }: MeasurementOptionsProps) {
    const measurements = isVolume ? volumeLitreValues : weightGramValues;

    return <Select options={measurements} />;
}

export type WithChildrenProps = {
    children: React.ReactNode;
};

export default function ConversionForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    return (
        <form className="relative flex h-full w-full flex-col justify-center shadow">
            <input
                type="number"
                className="my-10 w-full rounded border-transparent"
            />
            <div className="w-full">
                <MeasurementOptions isVolume={true} />
                <IngredientOptions />
            </div>
        </form>
    );
}
