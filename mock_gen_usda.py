import json
import math

# Updated USDA Base Values per 100g
# Macros: pro (protein), fat (total fat), cho (net carbohydrates), fib (fiber), sug (sugars)
usda_base = {
    # POLLO
    "Pollo Pechuga Sin piel": {"pro": 22.5, "fat": 2.6, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pollo Pechuga Con piel": {"pro": 20.8, "fat": 9.3, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pollo Muslo Sin piel": {"pro": 19.9, "fat": 4.3, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pollo Muslo Con piel": {"pro": 15.5, "fat": 15.3, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pollo Contramuslo Sin piel": {"pro": 19.0, "fat": 6.8, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pollo Contramuslo Con piel": {"pro": 16.5, "fat": 15.0, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pollo Alitas Con piel": {"pro": 13.5, "fat": 19.5, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    
    # PAVO
    "Pavo Pechuga Sin piel": {"pro": 23.7, "fat": 1.5, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pavo Pechuga Con piel": {"pro": 21.6, "fat": 7.3, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Pavo Muslo": {"pro": 19.5, "fat": 4.9, "cho": 0.0, "fib": 0.0, "sug": 0.0},

    # TERNERA
    "Ternera Magro": {"pro": 22.3, "fat": 4.1, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Ternera Solomillo": {"pro": 21.6, "fat": 6.7, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Ternera Entrecot": {"pro": 19.0, "fat": 12.0, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Ternera Picada (5% grasa)": {"pro": 21.4, "fat": 5.0, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Ternera Picada (20% grasa)": {"pro": 17.2, "fat": 20.0, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    
    # CERDO
    "Cerdo Lomo": {"pro": 21.1, "fat": 3.5, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Cerdo Solomillo": {"pro": 21.0, "fat": 3.7, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Cerdo Chuleta Con grasa": {"pro": 16.6, "fat": 18.2, "cho": 0.0, "fib": 0.0, "sug": 0.0},

    # ORGANOS
    "Pollo Hígado": {"pro": 16.9, "fat": 4.8, "cho": 0.9, "fib": 0.0, "sug": 0.0},
    "Pollo Corazón": {"pro": 15.6, "fat": 5.3, "cho": 0.1, "fib": 0.0, "sug": 0.0},
    "Pollo Mollejas": {"pro": 17.7, "fat": 2.1, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Ternera Hígado": {"pro": 20.4, "fat": 3.6, "cho": 3.9, "fib": 0.0, "sug": 0.0},
    "Ternera Corazón": {"pro": 17.7, "fat": 3.9, "cho": 0.1, "fib": 0.0, "sug": 0.0},
    "Cerdo Hígado": {"pro": 21.4, "fat": 3.6, "cho": 2.5, "fib": 0.0, "sug": 0.0},
    "Cordero Pierna Magro": {"pro": 20.4, "fat": 5.2, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Cordero Chuleta": {"pro": 15.6, "fat": 20.3, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Conejo Magro": {"pro": 20.1, "fat": 5.6, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    
    # PESCADO
    "Salmón": {"pro": 19.8, "fat": 13.4, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Atún Fresco": {"pro": 23.3, "fat": 4.9, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Merluza": {"pro": 15.9, "fat": 1.2, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Bacalao Fresco": {"pro": 17.8, "fat": 0.7, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Sardina": {"pro": 20.0, "fat": 11.5, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Dorada": {"pro": 19.0, "fat": 1.9, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Lubina": {"pro": 18.4, "fat": 2.6, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Trucha": {"pro": 20.0, "fat": 6.6, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Atún Enlatado (Agua)": {"pro": 25.5, "fat": 0.8, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Atún Enlatado (Aceite)": {"pro": 29.0, "fat": 8.0, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Gambas/Langostinos": {"pro": 20.1, "fat": 1.1, "cho": 0.9, "fib": 0.0, "sug": 0.0},
    
    # CARBOHIDRATOS (Base cooked if indicated)
    "Arroz Blanco": {"pro": 2.7, "fat": 0.3, "cho": 28.2, "fib": 0.4, "sug": 0.1},
    "Arroz Integral": {"pro": 2.6, "fat": 0.9, "cho": 23.0, "fib": 1.8, "sug": 0.4},
    "Pasta Blanca": {"pro": 5.8, "fat": 0.9, "cho": 31.0, "fib": 1.8, "sug": 0.5},
    "Pasta Integral": {"pro": 5.3, "fat": 0.8, "cho": 26.5, "fib": 3.9, "sug": 0.5},
    "Avena Seca": {"pro": 13.5, "fat": 6.9, "cho": 66.3, "fib": 10.1, "sug": 0.0},
    "Pan Blanco": {"pro": 8.8, "fat": 3.3, "cho": 49.0, "fib": 2.7, "sug": 5.0},
    "Pan Integral": {"pro": 13.0, "fat": 4.2, "cho": 41.0, "fib": 7.0, "sug": 4.0},
    "Quinoa (Cocida)": {"pro": 4.4, "fat": 1.9, "cho": 21.3, "fib": 2.8, "sug": 0.9},
    "Patata (Cruda)": {"pro": 2.0, "fat": 0.1, "cho": 17.5, "fib": 2.1, "sug": 0.8},
    "Boniato (Crudo)": {"pro": 1.6, "fat": 0.1, "cho": 20.1, "fib": 3.0, "sug": 4.2},
    
    # LEGUMBRES (Cocidas)
    "Garbanzos (Cocidos)": {"pro": 8.9, "fat": 2.6, "cho": 27.4, "fib": 7.6, "sug": 4.8},
    "Lentejas (Cocidas)": {"pro": 9.0, "fat": 0.4, "cho": 20.1, "fib": 7.9, "sug": 1.8},
    "Alubias Blancas (Cocidas)": {"pro": 8.7, "fat": 0.5, "cho": 22.3, "fib": 10.5, "sug": 0.3},
    
    # VERDURAS / HORTALIZAS (Crudas)
    "Brocoli": {"pro": 2.8, "fat": 0.4, "cho": 6.6, "fib": 2.6, "sug": 1.7},
    "Espinaca": {"pro": 2.9, "fat": 0.4, "cho": 3.6, "fib": 2.2, "sug": 0.4},
    "Tomate": {"pro": 0.9, "fat": 0.2, "cho": 3.9, "fib": 1.2, "sug": 2.6},
    "Zanahoria": {"pro": 0.9, "fat": 0.2, "cho": 9.6, "fib": 2.8, "sug": 4.7},
    "Calabacín": {"pro": 1.2, "fat": 0.3, "cho": 3.1, "fib": 1.0, "sug": 2.5},
    "Pimiento Rojo": {"pro": 1.0, "fat": 0.3, "cho": 6.0, "fib": 2.1, "sug": 4.2},
    "Pimiento Verde": {"pro": 0.8, "fat": 0.2, "cho": 4.6, "fib": 1.7, "sug": 2.4},
    "Cebolla": {"pro": 1.1, "fat": 0.1, "cho": 9.3, "fib": 1.7, "sug": 4.2},
    "Pepino": {"pro": 0.7, "fat": 0.1, "cho": 3.6, "fib": 0.5, "sug": 1.7},
    "Berenjena": {"pro": 1.0, "fat": 0.2, "cho": 5.9, "fib": 3.0, "sug": 3.5},
    "Champiñón": {"pro": 3.1, "fat": 0.3, "cho": 3.3, "fib": 1.0, "sug": 2.0},

    # FRUTAS
    "Plátano": {"pro": 1.1, "fat": 0.3, "cho": 22.8, "fib": 2.6, "sug": 12.2},
    "Manzana": {"pro": 0.3, "fat": 0.2, "cho": 13.8, "fib": 2.4, "sug": 10.4},
    "Naranja": {"pro": 0.9, "fat": 0.1, "cho": 11.8, "fib": 2.4, "sug": 9.4},
    "Pera": {"pro": 0.4, "fat": 0.1, "cho": 15.2, "fib": 3.1, "sug": 9.8},
    "Kiwi": {"pro": 1.1, "fat": 0.5, "cho": 14.7, "fib": 3.0, "sug": 9.0},
    "Fresa": {"pro": 0.7, "fat": 0.3, "cho": 7.7, "fib": 2.0, "sug": 4.9},
    "Uva Blanca": {"pro": 0.7, "fat": 0.2, "cho": 18.1, "fib": 0.9, "sug": 15.5},
    "Aguacate": {"pro": 2.0, "fat": 14.7, "cho": 8.5, "fib": 6.7, "sug": 0.7},
    
    # LACTEOS Y GRASAS
    "Huevo Entero": {"pro": 12.6, "fat": 9.5, "cho": 0.7, "fib": 0.0, "sug": 0.7},
    "Leche Entera": {"pro": 3.1, "fat": 3.3, "cho": 4.8, "fib": 0.0, "sug": 4.8},
    "Queso Fresco": {"pro": 12.4, "fat": 14.6, "cho": 4.1, "fib": 0.0, "sug": 4.1},
    "Aceite de Oliva": {"pro": 0.0, "fat": 100.0, "cho": 0.0, "fib": 0.0, "sug": 0.0},
    "Mantequilla": {"pro": 0.8, "fat": 81.1, "cho": 0.1, "fib": 0.0, "sug": 0.1},
}

def map_variations(name):
    lower = name.lower()
    if any(x in lower for x in ["hígado", "corazón", "mollejas"]):
        return [("Crudo", 1.0, 1.0, 0), ("Plancha", 1.35, 1.25, 0), ("Guisado", 1.15, 1.1, 0)]
    if any(x in lower for x in ["pollo", "pavo", "ternera", "cerdo", "cordero", "conejo"]):
        return [("Crudo", 1.0, 1.0, 0), ("Cocido/Vapor", 1.3, 1.3, 0), ("Plancha", 1.35, 1.25, 0), ("Horneado", 1.3, 1.2, 0), ("Frito", 1.45, 1.5, 6.0)]
    if any(x in lower for x in ["salmón", "atún", "merluza", "bacalao", "sardina", "dorada", "lubina", "trucha"]):
        if "Enlatado" in name: return [("Escurrimiento", 1.0, 1.0, 0)]
        return [("Crudo", 1.0, 1.0, 0), ("Cocido/Vapor", 1.25, 1.25, 0), ("Plancha", 1.3, 1.2, 0), ("Frito", 1.35, 1.4, 8.0)]
    if any(x in lower for x in ["arroz", "pasta", "quinoa"]):
        if "Cocida" in name or "Cocido" in name: return [("Cocido", 1.0, 1.0, 0)]
        return [("Seco", 1.0, 1.0, 0), ("Cocido", 0.35, 0.35, 0)]
    if "avena" in lower:
        return [("Seca", 1.0, 1.0, 0), ("Gachas", 0.25, 0.25, 0)]
    if any(x in lower for x in ["patata", "boniato", "brocoli", "espinaca", "zanahoria", "calabacín"]):
        return [("Natural", 1.0, 1.0, 0), ("Cocido/Vapor", 1.1, 1.1, 0), ("Horneado", 1.2, 1.2, 0)]
    return [("Natural", 1.0, 1.0, 0)]

def get_measures(name):
    l = name.lower()
    if "pechuga" in l: return [{"name": "Pechuga pequeña", "grams": 120}, {"name": "Mediana", "grams": 150}]
    if "muslo" in l: return [{"name": "Pieza", "grams": 120}]
    if any(x in l for x in ["ternera", "cerdo", "salmón", "merluza"]): return [{"name": "Filete estándar", "grams": 150}]
    if "huevo" in l: return [{"name": "Talla L", "grams": 63}]
    if any(x in l for x in ["manzana", "naranja", "plátano", "tomate"]): return [{"name": "Pieza mediana", "grams": 150}]
    if "leche" in l: return [{"name": "Vaso", "grams": 250}, {"name": "Taza", "grams": 150}]
    if "aceite" in l: return [{"name": "Cucharada", "grams": 14}, {"name": "Cucharadita", "grams": 5}]
    return [{"name": "Porción (100g)", "grams": 100}]

expanded_db = []
for base_name, m in usda_base.items():
    for v_name, pro_m, fat_m, add_cho in map_variations(base_name):
        pro = m["pro"] * pro_m
        fat = m["fat"] * fat_m
        cho = (m["cho"] * pro_m) + add_cho
        fib = m["fib"] * pro_m if m["fib"] > 0 else 0
        sug = m["sug"] * pro_m if m["sug"] > 0 else 0
        
        # Approximations
        sat = fat * 0.3
        mono = fat * 0.4
        poly = fat * 0.2
        omega3 = 0
        if any(x in base_name for x in ["Salmón", "Sardina", "Atún"]): omega3 = fat * 0.1
        
        cals = (pro * 4) + (cho * 4) + (fat * 9)
        
        expanded_db.append({
            "name": f"{base_name} ({v_name})",
            "macros": {
                "pro": round(pro, 1), "cho": round(cho, 1), "fat": round(fat, 1),
                "fiber": round(fib, 1), "sugars": round(sug, 1),
                "sat": round(sat, 1), "mono": round(mono, 1), "poly": round(poly, 1),
                "omega3": round(omega3, 1), "omega6": 0, "epa": 0, "dha": 0
            },
            "micros": {}, "aminos": {},
            "measures": get_measures(base_name),
            "calories": round(cals)
        })

print(f"Total items: {len(expanded_db)}")
with open("localProducts.js", "w", encoding="utf-8") as f:
    f.write(f"const localProductsDB = {json.dumps(expanded_db, indent=2)};")
