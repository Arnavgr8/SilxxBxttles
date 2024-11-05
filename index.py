from flask import Flask, render_template,redirect

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('main.html')

@app.route('/discord')
def discord():
    return redirect("https://discord.com/invite/ZTAFXhXkf2", code=302)

@app.route('/instagram')
def instagram():
    return redirect("https://www.instagram.com/silicobattles/", code=302)

@app.route('/brochure')
def brochure():
    return render_template('brochure.html')

@app.route('/events')
def events():
    return render_template('events.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/message')
def message():
    return render_template('message.html')
