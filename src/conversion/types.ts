import ingredients from './ingredientMeasurements.json';
import volumeLitreValues from './volumeLitreValues.json';
import weightGramValues from './weightGramValues.json';

export type BaseWeightUnit = keyof typeof weightGramValues;

export type BaseVolumeUnit = keyof typeof volumeLitreValues;

export type Unit = BaseWeightUnit | BaseVolumeUnit;

export type Ingredient = keyof typeof ingredients;

export type VolumeMeasurement = {
    ingredient: Ingredient;
    unit: BaseVolumeUnit;
    value: number;
};

export type WeightMeasurement = {
    ingredient: Ingredient;
    unit: BaseWeightUnit;
    value: number;
};

export type Measurement = VolumeMeasurement | WeightMeasurement;

export function isVolumeUnit(unit: Unit): unit is BaseVolumeUnit {
    return Object.keys(volumeLitreValues).includes(unit);
}

export function isWeightUnit(unit: Unit): unit is BaseWeightUnit {
    return Object.keys(weightGramValues).includes(unit);
}
export function isVolumeMeasurement(
    measurement: Measurement
): measurement is VolumeMeasurement {
    return Object.keys(volumeLitreValues).includes(measurement.unit);
}

export function isWeightMeasurement(
    measurement: Measurement
): measurement is WeightMeasurement {
    return Object.keys(weightGramValues).includes(measurement.unit);
}
