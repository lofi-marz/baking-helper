import ingredients from './ingredientMeasurements.json';
import volumeLitreValues from './volumeLitreValues.json';
import weightGramValues from './weightGramValues.json';
export type BaseWeightUnit = keyof typeof weightGramValues;

export type BaseVolumeUnit = keyof typeof volumeLitreValues;

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

function isVolumeMeasurement(
    measurement: Measurement
): measurement is VolumeMeasurement {
    if (volumeLitreValues[measurement.unit as BaseVolumeUnit]) return true;
    return false;
}

function isWeightMeasurement(
    measurement: Measurement
): measurement is WeightMeasurement {
    if (volumeLitreValues[measurement.unit as BaseVolumeUnit]) return true;
    return false;
}
