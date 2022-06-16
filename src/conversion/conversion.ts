import litres from './volumeLitreValues.json';
import grams from './weightGramValues.json';

import ingredientMeasurements from './ingredientMeasurements.json';

import {
    BaseVolumeUnit,
    BaseWeightUnit,
    isVolumeMeasurement,
    isVolumeUnit,
    isWeightUnit,
    Measurement,
    Unit,
    VolumeMeasurement,
    WeightMeasurement,
} from './types';

export function convert(value: Measurement, to: Unit): Measurement {
    if (isVolumeMeasurement(value) && isWeightUnit(to)) {
        return volumeToWeight(value, to);
    } else if (isVolumeMeasurement(value) && isVolumeUnit(to)) {
        return volumeToVolume(value, to);
    }

    return value;
}

export function volumeToVolume(
    value: VolumeMeasurement,
    to: BaseVolumeUnit
): VolumeMeasurement {
    const asMl = litres[value.unit]; ///1 cup = 237ml

    const mlperunit = litres[to]; //1tbsp = 15ml
    const ratio = asMl / mlperunit;
    return {
        value: ratio * value.value,
        ingredient: value.ingredient,
        unit: to,
    };
}

export function volumeToWeight(
    measurement: VolumeMeasurement,
    to: BaseWeightUnit
): WeightMeasurement {
    const ingredient = ingredientMeasurements[measurement.ingredient];
    const asGrams = ingredient[measurement.unit as keyof typeof ingredient]; //1 cup butter = 227g
    const gramsPerUnit = grams[to]; //1oz = 453g
    const ratio = asGrams / gramsPerUnit;
    return {
        value: measurement.value * ratio,
        ingredient: measurement.ingredient,
        unit: to,
    };
}
