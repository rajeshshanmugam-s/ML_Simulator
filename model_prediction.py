import pickle

import utils as ut
import config

model = pickle.load(open(config.trained_model, 'rb'))


def predictor(input_factors=list):
    prediction = model.predict(input_factors)
    out = ut.translator(prediction, False)
    return out


def prob_prdictor(input_factors=list):
    prediction_prob = model.predict_proba(input_factors)
    out = ut.translator(prediction_prob, True)
    return out




