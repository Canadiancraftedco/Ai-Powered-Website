from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# Fake trip recommendations
trip_recommendations = {
    "Banff": {"weather": "Cold, Snowy", "recommended_gear": ["Jacket", "Snow Boots", "Gloves"]},
    "Toronto": {"weather": "Mild, Rainy", "recommended_gear": ["Umbrella", "Raincoat"]}
}

@app.route('/api/recommend', methods=['GET'])
def recommend():
    location = request.args.get('query')
    if location and location in trip_recommendations:
        return jsonify(trip_recommendations[location])
    return jsonify({"error": "Location not found"}), 404

@app.route('/api/trending', methods=['GET'])
def trending():
    products = [
        {"name": "Canadian Tent", "price": "$199"},
        {"name": "Winter Sleeping Bag", "price": "$120"}
    ]
    return jsonify(products)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
