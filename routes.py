import flask as flk

import utils as ut
import model_prediction as mp

app = flk.Flask(__name__)


@app.route('/')
def test_route():
    """
    Testing whether the application is on.
    :return: Ullen Ayya- True
    """
    return "Working"


@app.route('/predict')
def predcit():
    sex = flk.request.args.get("Sex")
    housing = flk.request.args.get("Housing")
    saving_accounts = flk.request.args.get("Savings accounts")
    checking_account = flk.request.args.get("Checking account")
    purpose = flk.request.args.get("Purpose")
    job = flk.request.args.get("Job")
    ca = flk.request.args.get("Credit amount")
    print(ca)
    age = flk.request.args.get("Age")
    duration = flk.request.args.get("Duration in Months")

    factors = ut.factors_organiser(age, sex, job, housing, saving_accounts, checking_account,
                                   ca, duration, purpose)
    out = mp.prob_prdictor(factors)
    return out


if __name__ == '__main__':
    app.run(debug=True)


