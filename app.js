// --- i18n ---
const i18n = {
    es: {
        vegetables: 'Verduras', fruits: 'Frutas', tubers: 'Tubérculos',
        cereals: 'Cereales', dairy: 'Lácteos', legumes: 'Legumbres',
        nuts: 'Frutos Secos', meats: 'Carnes', fish: 'Pescado', 
        eggs: 'Huevos', oil: 'Aceite (AOVE)',
        // Tabs
        guide_title: 'Guía de Porciones',
        guide_desc: 'Referencia visual para 1 porción equivalente:',
        portions_tab: 'Porciones', add_tab: 'Añadir', 
        sug_tab: 'Sugerencias', prog_tab: 'Progreso', prof_tab: 'Perfil',
        prod_tab: 'Productos', // V13 Search Tab
        // Home
        hello: 'Hola', daily_goal: 'Objetivo Diario', progress: 'Progreso',
        tip_title: 'Tip Saludable', tip_next: 'Siguiente >>',
        day: 'Día', week: 'Sem',
        recommendation: 'Recomendación para', min_label: 'Mínimo', max_label: 'Máximo', servings_per: 'raciones al',
        // Macros
        macro_title: '¿Qué son los Macros?',
        macro_pro: 'Esenciales para construir y reparar tejidos, mantener la masa muscular y fortalecer el sistema inmune. (Carnes, pescados, huevos, legumbres).',
        macro_cho: 'La principal fuente de energía de tu cuerpo. Necesarios para el cerebro y el rendimiento físico. (Cereales, frutas, tubérculos).',
        macro_fat: 'Fundamentales para la salud hormonal, la absorción de vitaminas y la protección de órganos. (Aceite de oliva, aguacate, frutos secos).',
        // Suggestions
        fridge_title: 'Ingredientes y Grupos 👩‍🍳',
        fridge_desc: 'Selecciona los grupos de alimentos que tienes disponibles hoy:',
        search_btn: 'Recetas Locales', search_ai_btn: 'Pedir al Chef IA ✨',
        reload_btn: 'Limpiar filtros',
        smart_sug: 'Sugerencias para ti',
        no_results: 'No he encontrado recetas locales con esos grupos. ¡Prueba al Chef IA!',
        ingredients_label: 'Ingredientes:', instructions_label: 'Instrucciones:',
        ai_cooking: 'El Chef IA está cocinando ideas...',
        ai_generating: 'Generando recetas para los grupos:',
        ai_thinking_tip: 'El Chef IA está elaborando un consejo para ti... 🤖',
        // Log
        save_record: 'Guardar Registro', recent_history: 'Historial Reciente',
        no_history: 'No has registrado nada aún hoy.',
        portions_saved: '¡Porciones registradas correctamente! 🎉',
        add_at_least_one: 'Añade al menos 1 porción antes de guardar.',
        today_at: 'Hoy,',
        // Profile
        your_profile: 'Tu Perfil',
        profile_desc: 'Tus datos calcularán tus necesidades energéticas.',
        name_label: 'Nombre:', age_label: 'Edad:', gender_label: 'Género:',
        male: 'Masculino', female: 'Femenino',
        weight_label: 'Peso (kg):', height_label: 'Altura (cm):',
        activity_label: 'Nivel de Actividad Diaria:',
        lang_label: 'Idioma / Language:',
        sports_title: 'Deportes (Horas semanales)',
        strength: 'Fuerza', endurance: 'Resistencia', team: 'Equipo',
        save_profile: 'Guardar Perfil',
        ai_settings: '🤖 Ajustes Modo Chef IA',
        ai_desc: 'Introduce tu <strong>API Key de Google Gemini</strong>. Es <span style="font-weight:bold; color:var(--primary-color);">totalmente gratuita</span> y desbloqueará recetas infinitas creadas a medida y tips generados al instante.',
        ai_link: 'Consigue tu clave gratuita aquí',
        ai_placeholder: 'Pega tu API Key... ej: AIzaSy...',
        ai_save_btn: 'Guardar y Verificar Clave',
        ai_verifying: 'Verificando conexión...',
        ai_success_title: '¡Conexión Exitosa! 🤖',
        ai_success_msg: 'Clave de IA guardada y verificada. El modo de recetas infinitas y tips inteligentes está activado.',
        ai_error_title: 'Error de Conexión ⚠️',
        ai_error_msg: 'La API Key introducida parece ser inválida. Por favor, revísala y vuelve a intentarlo.',
        ai_net_error_title: 'Error de Red ⚠️',
        ai_net_error_msg: 'No pudimos conectar con los servidores de Google. Revisa tu conexión a internet.',
        ai_removed_title: 'Clave Eliminada',
        ai_removed_msg: 'Modo Inteligente desactivado. Volviendo a la base de datos local y a los tips nativos.',
        clear_all: 'Borrar Todo el Historial',
        clear_confirm: '¿Seguro que quieres borrar todo?',
        profile_saved_title: '✅ Perfil Actualizado',
        profile_saved_msg: 'Tus datos se han guardado y tus requerimientos energéticos han sido recalculados.',
        pregnant_warn: 'El sistema actual no está calibrado para embarazadas/lactantes. ¿Confirmas que no estás en esos estados?',
        first_time: '¡Hola! Por favor configura tu perfil primero para calcular tus necesidades.',
        meal_added: '¡Añadido:',
        sedentary: 'A. Sedentario (Trabajo de oficina)',
        light_active: 'B. Ligeramente Activo',
        mod_active: 'C. Moderadamente Activo',
        very_active: 'D. Muy Activo',
        ext_active: 'E. Extremadamente Activo'
    },
    en: {
        vegetables: 'Vegetables', fruits: 'Fruits', tubers: 'Tubers',
        cereals: 'Cereals', dairy: 'Dairy', legumes: 'Legumes',
        nuts: 'Nuts', meats: 'Meats', fish: 'Fish', 
        eggs: 'Eggs', oil: 'Olive Oil (EVOO)',
        // Tabs
        guide_title: 'Portions Guide',
        guide_desc: 'Visual reference for 1 equivalent portion:',
        portions_tab: 'Portions', add_tab: 'Add', 
        sug_tab: 'Suggestions', prog_tab: 'Progress', prof_tab: 'Profile',
        prod_tab: 'Products', // V13 Search Tab
        // Home
        hello: 'Hello', daily_goal: 'Daily Goal', progress: 'Progress',
        tip_title: 'Health Tip', tip_next: 'Next >>',
        day: 'Day', week: 'Week',
        recommendation: 'Recommendation for', min_label: 'Minimum', max_label: 'Maximum', servings_per: 'servings per',
        // Macros
        macro_title: 'What are Macros?',
        macro_pro: 'Essential for building and repairing tissues, maintaining muscle mass and strengthening the immune system. (Meats, fish, eggs, legumes).',
        macro_cho: 'The main source of energy for your body. Necessary for the brain and physical performance. (Cereals, fruits, tubers).',
        macro_fat: 'Essential for hormonal health, vitamin absorption and organ protection. (Olive oil, avocado, nuts).',
        // Suggestions
        fridge_title: 'Ingredients and Groups 👩‍🍳',
        fridge_desc: 'Select the food groups you have available today:',
        search_btn: 'Local Recipes', search_ai_btn: 'Ask AI Chef ✨',
        reload_btn: 'Clear filters',
        smart_sug: 'Suggestions for you',
        no_results: 'I couldn\'t find local recipes with those groups. Try the AI Chef!',
        ingredients_label: 'Ingredients:', instructions_label: 'Instructions:',
        ai_cooking: 'The AI Chef is cooking ideas...',
        ai_generating: 'Generating recipes for groups:',
        ai_thinking_tip: 'The AI Chef is preparing a tip for you... 🤖',
        // Settings
        settings: 'Settings', set_api:'Add your Gemini API Key here:', save_key:'Save Key', clear_history:'Clear History', 
        lang_toggle: 'Cambiar a Español',
        // Products (OFF API)
        prod_title: 'Product Search',
        prod_desc: 'Search for a product by name to see its macros and log its consumption.',
        prod_search_ph: 'E.g. Whole milk, Oats...',
        prod_btn: 'Search',
        prod_logging: 'Log',
        prod_timeline: 'Consumption Log',
        prod_empty: 'You haven\'t logged any products yet today.',
        prod_cal: 'kcal / 100g',
        // Log
        save_record: 'Save Record', recent_history: 'Recent History',
        no_history: 'You haven\'t logged anything yet today.',
        portions_saved: 'Portions logged successfully! 🎉',
        add_at_least_one: 'Add at least 1 portion before saving.',
        today_at: 'Today,',
        // Profile
        your_profile: 'Your Profile',
        profile_desc: 'Your data will be used to calculate your energy needs.',
        name_label: 'Name:', age_label: 'Age:', gender_label: 'Gender:',
        male: 'Male', female: 'Female',
        weight_label: 'Weight (kg):', height_label: 'Height (cm):',
        activity_label: 'Activity Level:',
        lang_label: 'Language / Idioma:',
        sports_title: 'Sports (Weekly hours)',
        strength: 'Strength', endurance: 'Endurance', team: 'Team Sports',
        save_profile: 'Save Profile',
        ai_settings: '🤖 AI Chef Settings',
        ai_desc: 'Enter your <strong>Google Gemini API Key</strong>. It\'s <span style="font-weight:bold; color:var(--primary-color);">completely free</span> and will unlock unlimited custom recipes and instant tips.',
        ai_link: 'Get your free key here',
        ai_placeholder: 'Paste your API Key... e.g. AIzaSy...',
        ai_save_btn: 'Save & Verify Key',
        ai_verifying: 'Verifying connection...',
        ai_success_title: 'Connection Successful! 🤖',
        ai_success_msg: 'AI key saved and verified. Unlimited recipe mode and smart tips are now active.',
        ai_error_title: 'Connection Error ⚠️',
        ai_error_msg: 'The API Key you entered appears to be invalid. Please check it and try again.',
        ai_net_error_title: 'Network Error ⚠️',
        ai_net_error_msg: 'Could not connect to Google servers. Please check your internet connection.',
        ai_removed_title: 'Key Removed',
        ai_removed_msg: 'Smart Mode deactivated. Falling back to local database and native tips.',
        clear_all: 'Clear All History',
        clear_confirm: 'Are you sure you want to clear everything?',
        profile_saved_title: '✅ Profile Updated',
        profile_saved_msg: 'Your data has been saved and your energy needs have been recalculated.',
        pregnant_warn: 'The current system is not calibrated for pregnant/lactating individuals. Do you confirm you are not in those states?',
        first_time: 'Hello! Please configure your profile first to calculate your needs.',
        meal_added: 'Added:',
        sedentary: 'A. Sedentary (Office work)',
        light_active: 'B. Lightly Active',
        mod_active: 'C. Moderately Active',
        very_active: 'D. Very Active',
        ext_active: 'E. Extremely Active'
    }
};

function t(key) {
    const lang = (userProfile && userProfile.language) || 'es';
    return i18n[lang][key] || key;
}

// --- portions.js (from servings_weight.sql) ---
const PORTIONS_GUIDE = {
    vegetable: { key: 'vegetables', weightText: '100g - 200g', ref: 'Un plato llano normal de ensalada variada, un plato de verdura cocida o crema', icon: '🥗',
        micros: { calcium: 40, iron: 0.8, vC: 25 },
        details: '🥬 <b>Hojas verdes:</b> lechuga, espinaca, rúcula, canónigos, acelga<br>🥕 <b>Hortalizas:</b> tomate, zanahoria, pimiento, calabacín, berenjena, pepino<br>🥦 <b>Crucíferas:</b> brócoli, coliflor, col, coles de Bruselas<br>🧅 <b>Bulbos:</b> cebolla, ajo, puerro<br>🍄 <b>Setas:</b> champiñón, shiitake, boletus' },
    fruit: { key: 'fruits', weightText: '120g - 200g', ref: 'Una pieza mediana, un tazón de cerezas/fresas o 2 rodajas de melón/sandía', icon: '🍎',
        micros: { calcium: 20, iron: 0.3, vC: 45 },
        details: '🍊 <b>Cítricos:</b> naranja, mandarina, pomelo, limón<br>🍓 <b>Frutos rojos:</b> fresa, arándanos, frambuesa, mora<br>🍌 <b>Tropical:</b> plátano, piña, mango, papaya, kiwi<br>🍎 <b>De hueso/pepita:</b> manzana, pera, melocotón, ciruela, cereza<br>🍈 <b>Melones:</b> sandía, melón' },
    tuber: { key: 'tubers', weightText: '150g - 200g', ref: 'Una patata grande o dos pequeñas', icon: '🥔',
        micros: { calcium: 15, iron: 1.2, vC: 20 },
        details: '🥔 <b>Patata:</b> blanca, roja, nueva<br>🍠 <b>Boniato/Camote:</b> naranja, blanco<br>🟤 <b>Otros:</b> yuca, ñame, taro' },
    cereal: { key: 'cereals', weightText: '60g - 80g (en seco)', ref: 'Un plato normal de arroz o pasta (aprox. 180g-240g cocido)', icon: '🌾',
        micros: { calcium: 10, iron: 1.5, vC: 0 },
        details: '🍚 <b>Arroz:</b> blanco, integral, basmati<br>🍝 <b>Pasta:</b> espagueti, macarrones, integral<br>🥖 <b>Pan:</b> blanco, integral, centeno (40-60g = 1-2 rebanadas)<br>🥣 <b>Avena:</b> copos, harina de avena<br>🌽 <b>Otros:</b> maíz, quinoa, cuscús, mijo' },
    dairy: { key: 'dairy', weightText: '125g - 250g', ref: '1 vaso de leche, 2-3 lonchas de queso, o 1 yogur', icon: '🥛',
        micros: { calcium: 250, iron: 0.1, vC: 2 },
        details: '🥛 <b>Leche:</b> entera, semidesnatada, desnatada (200-250 ml)<br>🧀 <b>Queso:</b> fresco (80-125g), curado (40-60g), mozzarella<br>🍶 <b>Yogur:</b> natural, griego, kéfir (125g)<br>🧈 <b>Otros:</b> requesón, queso batido, bebidas vegetales enriquecidas' },
    legume: { key: 'legumes', weightText: '170g (cocidos)', ref: 'Un plato individual (aprox. 60g-80g en seco)', icon: '🍲',
        micros: { calcium: 50, iron: 3.5, vC: 0 },
        details: '🫘 <b>Judías/Alubias:</b> blancas, pintas, negras, rojas<br>🟤 <b>Lentejas:</b> pardinas, rojas, verdes<br>🟡 <b>Garbanzos:</b> enteros, harina de garbanzo, hummus<br>🟢 <b>Guisantes:</b> frescos, congelados<br>🫛 <b>Soja:</b> edamame, tofu, tempeh' },
    nut: { key: 'nuts', weightText: '20g - 30g', ref: '1 puñado (15-20 almendras/avellanas o 5 nueces)', icon: '🥜',
        micros: { calcium: 50, iron: 1.0, vC: 0 },
        details: '🥜 <b>Nueces:</b> nuez común, nuez pecana, nuez de macadamia<br>🫘 <b>Almendras:</b> crudas, tostadas, laminadas<br>🌰 <b>Avellanas/Castañas:</b> enteras, molidas<br>🥜 <b>Cacahuete:</b> natural, tostado, mantequilla de cacahuete<br>🌻 <b>Semillas:</b> chía, lino, sésamo, girasol, calabaza' },
    meat: { key: 'meats', weightText: '100g - 125g', ref: '1 filete mediano, pollo, conejo', icon: '🥩',
        micros: { calcium: 10, iron: 1.5, vC: 0 },
        details: '🍗 <b>Pollo:</b> pechuga, muslo, alitas (sin piel preferente)<br>🥩 <b>Vacuno/Ternera:</b> solomillo, lomo, filete, picada magra<br>🐖 <b>Cerdo:</b> lomo, solomillo, chuleta magra<br>🐇 <b>Conejo:</b> muslo, lomo<br>🦃 <b>Pavo:</b> pechuga, fiambre natural' },
    fish: { key: 'fish', weightText: '125g - 150g', ref: '1 filete individual o varias unidades de marisco', icon: '🐟',
        micros: { calcium: 20, iron: 1.0, vC: 0 },
        details: '🐟 <b>Pescado blanco:</b> merluza, bacalao, dorada, lubina, rape<br>🐠 <b>Pescado azul:</b> salmón, sardina, caballa, atún, boquerón<br>🦐 <b>Marisco:</b> gambas, langostinos, mejillones, calamares<br>🥫 <b>Conservas:</b> atún al natural, sardinas en lata' },
    egg: { key: 'eggs', weightText: '53g - 63g', ref: '1 huevo mediano M', icon: '🥚',
        micros: { calcium: 25, iron: 0.9, vC: 0 },
        details: '🥚 <b>Huevo M:</b> ~55g (6g proteína, 5g grasa)<br>🍳 <b>Preparación:</b> cocido, escalfado, revuelto, tortilla<br>💡 <b>Consejo:</b> Se recomiendan 3-4 huevos/semana como parte de una dieta equilibrada' },
    oil: { key: 'oil', weightText: '10g - 15g', ref: '1 cucharada sopera', icon: '🫒',
        micros: { calcium: 0, iron: 0, vC: 0 },
        details: '🫒 <b>Aceite de oliva virgen extra:</b> mejor opción para aliñar y cocinar<br>🌻 <b>Aceite de girasol:</b> para frituras (alto oleico preferente)<br>🥑 <b>Aceite de aguacate:</b> resistente a altas temperaturas<br>💡 <b>Consejo:</b> Limita a 3-6 cucharadas/día incluyendo cocción' }
};

// --- data.js ---
const mealsDatabase = [
    { id: 'm1', name: 'Ensalada de Lentejas y Tomate', image: '🥗', calories: 350, macros: {pro: 18, cho: 45, fat: 12}, 
      groups: ['legume', 'vegetable', 'oil'],
      portionBreakdown: { legume: 1, vegetable: 1, oil: 1 },
      ingredientsList: ['170g lentejas cocidas', '150g tomate', '50g cebolla', '1 cdta aceite oliva virgen extra', 'vinagre'],
      instructions: 'Mezcla las lentejas cocidas con tomate y cebolla picados. Aliña con aceite y vinagre.' },
    { id: 'm2', name: 'Salmón al Horno con Espárragos', image: '🐟', calories: 420, macros: {pro: 35, cho: 8, fat: 26}, 
      groups: ['fish', 'vegetable', 'oil'],
      portionBreakdown: { fish: 1, vegetable: 1, oil: 1 },
      ingredientsList: ['125g salmón', '150g espárragos', 'limón', '1 cdta aceite oliva virgen extra', 'pimienta'],
      instructions: 'Coloca el salmón y los espárragos en una bandeja, rocía limón y aceite. Hornea a 200°C por 15 min.' },
    { id: 'm3', name: 'Pechuga de Pollo con Arroz', image: '🍗', calories: 400, macros: {pro: 38, cho: 45, fat: 10}, 
      groups: ['meat', 'cereal', 'oil'],
      portionBreakdown: { meat: 1, cereal: 1, oil: 1 },
      ingredientsList: ['125g pechuga pollo', '60g arroz en seco', 'ajo', '1 cdta aceite oliva virgen extra', 'perejil'],
      instructions: 'Haz el pollo a la plancha con ajo y perejil. Acompaña con arroz integral hervido.' },
    { id: 'm4', name: 'Ternera con Patatas Asadas', image: '🥩', calories: 550, macros: {pro: 40, cho: 35, fat: 25}, 
      groups: ['meat', 'tuber', 'oil'],
      portionBreakdown: { meat: 1, tuber: 1, oil: 1.5 },
      ingredientsList: ['125g filete ternera', '200g patatas', '1.5 cdtas aceite oliva virgen extra', 'romero'],
      instructions: 'Corta las patatas y ásalas con romero. Haz el filete de ternera a la plancha al gusto.' },
    { id: 'm5', name: 'Sopa Minestrone', image: '🥣', calories: 250, macros: {pro: 10, cho: 40, fat: 5}, 
      groups: ['vegetable', 'legume'],
      portionBreakdown: { vegetable: 1.5, legume: 0.5 },
      ingredientsList: ['85g alubias cocidas', 'caldo vegetal', '100g zanahoria', '50g apio', '100g tomate', '30g pasta'],
      instructions: 'Cuece la verdura troceada en caldo. Añade alubias cocidas y un poco de pasta.' },
    { id: 'm6', name: 'Yogur Natural y Manzana', image: '🍎', calories: 150, macros: {pro: 6, cho: 25, fat: 4}, 
      groups: ['dairy', 'fruit'],
      portionBreakdown: { dairy: 1, fruit: 1 },
      ingredientsList: ['125g yogur natural', '150g manzana'],
      instructions: 'Corta la manzana en trozos y mézclala con el yogur.' },
    { id: 'm7', name: 'Tostada Integral con Aguacate', image: '🥑', calories: 280, macros: {pro: 6, cho: 30, fat: 16}, 
      groups: ['cereal', 'vegetable', 'oil'],
      portionBreakdown: { cereal: 1, vegetable: 0.5, oil: 1 },
      ingredientsList: ['50g pan integral', '80g aguacate', 'limón', 'sal'],
      instructions: 'Tuesta el pan, machaca el aguacate con sal y un chorrito de limón. Úntalo.' },
    { id: 'm8', name: 'Sardinas a la Plancha', image: '🐠', calories: 320, macros: {pro: 28, cho: 0, fat: 22}, 
      groups: ['fish', 'oil'],
      portionBreakdown: { fish: 1, oil: 0.5 },
      ingredientsList: ['130g sardinas', '0.5 cdtas aceite oliva virgen extra', 'sal gruesa'],
      instructions: 'Haz las sardinas a la plancha con unas gotas de aceite y sal gruesa.' },
    { id: 'm9', name: 'Garbanzos con Espinacas', image: '🍲', calories: 380, macros: {pro: 18, cho: 50, fat: 10}, 
      groups: ['legume', 'vegetable', 'oil'],
      portionBreakdown: { legume: 1, vegetable: 1, oil: 1 },
      ingredientsList: ['170g garbanzos cocidos', '200g espinacas', '1 diente ajo', '1 cdta aceite oliva virgen extra', 'pimentón'],
      instructions: 'Sofríe el ajo con pimentón, añade las espinacas hasta que reduzcan y mezcla con garbanzos cocidos.' },
    { id: 'm10', name: 'Macedonia de Frutas Variadas', image: '🍉', calories: 120, macros: {pro: 1, cho: 30, fat: 0}, 
      groups: ['fruit'],
      portionBreakdown: { fruit: 1.5 },
      ingredientsList: ['100g manzana', '100g plátano', '100g naranja', '50g uva'],
      instructions: 'Lava, pela y corta todas las frutas en trozos pequeños. Mezcla en un bol.' },
    { id: 'm11', name: 'Bowl de Avena con Frutos Rojos', image: '🥣', calories: 310, macros: {pro: 12, cho: 50, fat: 6}, 
      groups: ['cereal', 'fruit', 'dairy'],
      portionBreakdown: { cereal: 1, fruit: 0.5, dairy: 1 },
      ingredientsList: ['60g avena', '200ml leche', '80g frutos rojos', '10g nueces'],
      instructions: 'Calienta la leche y añade la avena hasta espesar. Decora con frutos rojos frescos.' },
    { id: 'm12', name: 'Tortilla de Champiñones', image: '🍳', calories: 250, macros: {pro: 16, cho: 5, fat: 18}, 
      groups: ['egg', 'vegetable', 'oil'],
      portionBreakdown: { egg: 2, vegetable: 1, oil: 1 },
      ingredientsList: ['2 huevos M', '150g champiñones', '1 cdta aceite oliva virgen extra', 'sal'],
      instructions: 'Saltea los champiñones láminados. Bate los huevos, mézclalos con los champiñones y cuaja en sartén.' },
    { id: 'm13', name: 'Lubina al Horno con Limón', image: '🐟', calories: 350, macros: {pro: 36, cho: 2, fat: 20}, 
      groups: ['fish', 'oil'],
      portionBreakdown: { fish: 1.5, oil: 1 },
      ingredientsList: ['180g lubina', 'limón', '1 cdta aceite oliva virgen extra', 'ajo'],
      instructions: 'Rellena la lubina con ajo y rodajas de limón. Hornea a 180°C durante 20 minutos.' },
    { id: 'm14', name: 'Pollo al Curry con Arroz', image: '🍛', calories: 550, macros: {pro: 35, cho: 65, fat: 15}, 
      groups: ['meat', 'cereal', 'vegetable', 'oil'],
      portionBreakdown: { meat: 1, cereal: 1.5, vegetable: 0.5, oil: 1 },
      ingredientsList: ['125g pollo', '90g arroz basmati', '50g cebolla', '1 cdta aceite oliva virgen extra', 'curry'],
      instructions: 'Dora pollo con cebolla. Añade curry y un poco de agua, cuece 10min. Sirve con arroz hervido.' },
    { id: 'm15', name: 'Ensalada Caprese', image: '🥗', calories: 300, macros: {pro: 15, cho: 8, fat: 22}, 
      groups: ['vegetable', 'dairy', 'oil'],
      portionBreakdown: { vegetable: 1, dairy: 1, oil: 1 },
      ingredientsList: ['150g tomate', '60g mozzarella fresca', 'albahaca', '1 cdta aceite oliva virgen extra'],
      instructions: 'Corta el tomate y la mozzarella en rodajas. Intercala con albahaca, aliña.' },
    { id: 'm16', name: 'Lentejas Estofadas con Verduras', image: '🥘', calories: 380, macros: {pro: 22, cho: 55, fat: 6}, 
      groups: ['legume', 'vegetable', 'oil'],
      portionBreakdown: { legume: 1, vegetable: 1, oil: 1 },
      ingredientsList: ['80g lentejas secas', '100g zanahoria', '100g calabacín', '1 cdta aceite oliva virgen extra', 'pimentón'],
      instructions: 'Cuece todo junto a fuego lento hasta que las lentejas estén tiernas.' },
    { id: 'm17', name: 'Merluza a la Plancha con Espárragos', image: '🐟', calories: 350, macros: {pro: 32, cho: 6, fat: 18}, groups: ['fish', 'vegetable'],
      ingredientsList: ['merluza', 'espárragos verdes', 'ajo en polvo', 'aceite de oliva'],
      instructions: 'Plancha los espárragos. En la misma sartén haz el filete de merluza con ajo en polvo.' },
    { id: 'm18', name: 'Bocadillo Integral de Atún', image: '🥪', calories: 400, macros: {pro: 25, cho: 50, fat: 10}, groups: ['cereal', 'fish', 'vegetable'],
      ingredientsList: ['pan integral', 'atún al natural', 'tomate', 'lechuga'],
      instructions: 'Abre el pan, frota tomate si quieres, y esparce el atún escurrido sobre hojas de lechuga.' },
    { id: 'm19', name: 'Revuelto de Ajetes y Gambas', image: '🦐', calories: 280, macros: {pro: 22, cho: 6, fat: 18}, groups: ['egg', 'fish', 'vegetable'],
      ingredientsList: ['huevos', 'ajetes tiernos', 'gambas peladas', 'aceite de oliva'],
      instructions: 'Saltea los ajetes y las gambas. Añade huevos batidos y remueve hasta que cuajen.' },
    { id: 'm20', name: 'Macedonia con Yogur y Nueces', image: '🍨', calories: 240, macros: {pro: 8, cho: 25, fat: 12}, groups: ['fruit', 'dairy', 'nut'],
      ingredientsList: ['plátano', 'manzana', 'yogur natural', 'nueces'],
      instructions: 'Corta la fruta, vierte el yogur por encima y espolvorea nueces troceadas.' },
    { id: 'm21', name: 'Hamburguesa de Pollo con Ensalada', image: '🍔', calories: 500, macros: {pro: 35, cho: 45, fat: 18}, groups: ['meat', 'cereal', 'vegetable'],
      ingredientsList: ['carne picada de pollo', 'pan integral', 'tomate', 'lechuga'],
      instructions: 'Haz una bolita de carne y aplástala a la plancha. Sírvela en el pan con tomate y lechuga.' },
    { id: 'm22', name: 'Salmón Papillote con Verduras', image: '🍣', calories: 420, macros: {pro: 30, cho: 12, fat: 28}, groups: ['fish', 'vegetable'],
      ingredientsList: ['salmón', 'calabacín', 'zanahoria', 'papel de plata'],
      instructions: 'Envuelve el salmón y verduras en tiras en papel de aluminio. Hornea 15 min.' },
    { id: 'm23', name: 'Macarrones con Tomate y Queso', image: '🍝', calories: 450, macros: {pro: 18, cho: 70, fat: 12}, groups: ['cereal', 'vegetable', 'dairy'],
      ingredientsList: ['macarrones integrales', 'salsa de tomate', 'queso rallado', 'orégano'],
      instructions: 'Hierve la pasta. Mezcla íntimamente con el tomate caliente, espolvorea queso y orégano.' },
    { id: 'm24', name: 'Guiso de Alubias con Zanahoria', image: '🍲', calories: 350, macros: {pro: 16, cho: 50, fat: 8}, groups: ['legume', 'vegetable'],
      ingredientsList: ['alubias blancas', 'zanahoria', 'caldo', 'pimentón', 'cebolla'],
      instructions: 'Sofríe cebolla y zanahoria. Añade pimentón, vuelca las alubias cocidas y caldo, cuece 10min.' },
    { id: 'm25', name: 'Porridge de Chía y Plátano', image: '🍌', calories: 280, macros: {pro: 10, cho: 45, fat: 8}, groups: ['cereal', 'fruit', 'dairy'],
      ingredientsList: ['semillas de chía', 'avena', 'leche', 'plátano'],
      instructions: 'Mezcla chía, avena y leche por la noche. Por la mañana añade plátano en rodajas.' },

    // Expansion to 50+ recipes
    { id: 'm26', name: 'Sopa de Calabaza y Jengibre', image: '🥣', calories: 220, macros: {pro: 5, cho: 35, fat: 8}, groups: ['vegetable'],
      ingredientsList: ['calabaza', 'cebolla', 'jengibre', 'aceite de oliva', 'caldo'],
      instructions: 'Rehoga cebolla y jengibre. Añade la calabaza en dados, cubre con caldo, hierve y tritura.' },
    { id: 'm27', name: 'Berenjenas Rellenas de Atún', image: '🍆', calories: 380, macros: {pro: 28, cho: 20, fat: 20}, groups: ['vegetable', 'fish', 'dairy'],
      ingredientsList: ['berenjenas', 'atún', 'salsa de tomate', 'queso rallado'],
      instructions: 'Asa las mitades de berenjena. Vacia la carne, mézclala con atún y tomate, rellena y gratina.' },
    { id: 'm28', name: 'Tabulé de Quinoa y Fresas', image: '🥗', calories: 310, macros: {pro: 10, cho: 45, fat: 10}, groups: ['cereal', 'fruit', 'vegetable'],
      ingredientsList: ['quinoa', 'fresas', 'menta', 'pepino', 'aceite de oliva'],
      instructions: 'Mezcla quinoa cocida con pepino y fresas troceadas. Aliña con aceite y hojas de menta.' },
    { id: 'm29', name: 'Guisantes con Jamón y Huevo', image: '🥬', calories: 340, macros: {pro: 22, cho: 28, fat: 15}, groups: ['legume', 'meat', 'egg'],
      ingredientsList: ['guisantes', 'taquitos de jamón', 'huevo', 'cebolla'],
      instructions: 'Sofríe cebolla y jamón. Añade guisantes cocidos y cuaja un huevo escalfado encima.' },
    { id: 'm30', name: 'Pimientos Rellenos de Arroz', image: '🫑', calories: 360, macros: {pro: 12, cho: 60, fat: 8}, groups: ['vegetable', 'cereal'],
      ingredientsList: ['pimientos', 'arroz integral', 'salsa de tomate', 'ajo'],
      instructions: 'Rellena los pimientos limpios con arroz mezclado con tomate. Hornea hasta que el pimiento esté blando.' },
    { id: 'm31', name: 'Tortitas de Avena y Plátano', image: '🥞', calories: 320, macros: {pro: 12, cho: 50, fat: 8}, groups: ['cereal', 'fruit', 'egg'],
      ingredientsList: ['avena', 'plátano maduro', 'huevo', 'canela'],
      instructions: 'Tritura todo junto y dora pequeñas porciones de masa en una sartén antiadherente.' },
    { id: 'm32', name: 'Sepia a la Plancha con Ajo', image: '🦑', calories: 290, macros: {pro: 35, cho: 2, fat: 15}, groups: ['fish'],
      ingredientsList: ['sepia', 'ajo', 'perejil', 'aceite de oliva'],
      instructions: 'Limpia la sepia, córtala y hazla a la plancha a fuego fuerte. Adereza con ajo y perejil picados.' },
    { id: 'm33', name: 'Wrap Integral de Pollo y Aguacate', image: '🌯', calories: 480, macros: {pro: 35, cho: 40, fat: 20}, groups: ['cereal', 'meat', 'vegetable'],
      ingredientsList: ['tortilla integral', 'pollo desmenuzado', 'aguacate', 'lechuga'],
      instructions: 'Unta aguacate en la tortilla, reparte la lechuga y el pollo. Enrolla y tuesta brevemente.' },
    { id: 'm34', name: 'Gofres Salados de Calabacín', image: '🧇', calories: 270, macros: {pro: 15, cho: 30, fat: 12}, groups: ['vegetable', 'cereal', 'egg'],
      ingredientsList: ['calabacín rallado', 'harina integral', 'huevo', 'sal'],
      instructions: 'Mezcla ingredientes y hazlos en una gofrera o sartén precalentada.' },
    { id: 'm35', name: 'Tarta de Queso Fit con Frutos Rojos', image: '🍰', calories: 260, macros: {pro: 20, cho: 20, fat: 10}, groups: ['dairy', 'fruit'],
      ingredientsList: ['queso fresco batido', 'huevo', 'frutos rojos', 'edulcorante'],
      instructions: 'Bate el queso con huevo y edulcorante, hornea a 180ºC media hora. Sirve con frutos rojos fríos.' },
    { id: 'm36', name: 'Poke Bowl de Salmón', image: '🍲', calories: 520, macros: {pro: 30, cho: 60, fat: 18}, groups: ['fish', 'cereal', 'vegetable'],
      ingredientsList: ['salmón', 'arroz sushi', 'edamame', 'pepino', 'salsa de soja'],
      instructions: 'Corta el salmón crudo en dados, macera con soja. Sirve sobre arroz frío con edamame y pepino.' },
    { id: 'm37', name: 'Crema de Calabacín y Puerro', image: '🥣', calories: 200, macros: {pro: 6, cho: 20, fat: 10}, groups: ['vegetable', 'dairy'],
      ingredientsList: ['calabacín', 'puerro', 'quesito light', 'caldo'],
      instructions: 'Hierve la verdura troceada. Pásala por la batidora añadiendo un quesito para darle cremosidad.' },
    { id: 'm38', name: 'Tofu Salteado con Brócoli', image: '🥢', calories: 340, macros: {pro: 25, cho: 20, fat: 18}, groups: ['legume', 'vegetable'],
      ingredientsList: ['tofu firme', 'brócoli', 'salsa de soja', 'aceite de sésamo'],
      instructions: 'Saltea dados de tofu previamentes escurridos. Añade arbolitos de brócoli al vapor y un hilo de soja.' },
    { id: 'm39', name: 'Pavo a la Plancha y Boniato', image: '🍠', calories: 430, macros: {pro: 38, cho: 50, fat: 8}, groups: ['meat', 'tuber'],
      ingredientsList: ['pavo', 'boniato', 'pimienta negra', 'aceite de oliva'],
      instructions: 'Asa bastones de boniato al horno. Plancha los filetes de pavo salpimentados.' },
    { id: 'm40', name: 'Huevo a la Plancha con Champiñones', image: '🍳', calories: 250, macros: {pro: 18, cho: 5, fat: 16}, groups: ['egg', 'vegetable'],
      ingredientsList: ['huevo', 'champiñones', 'ajo', 'perejil'],
      instructions: 'Saltea champiñones con ajo. En una sartén con poquísimo aceite, haz el huevo a la plancha.' },
    { id: 'm41', name: 'Muffins de Arándanos y Plátano', image: '🧁', calories: 280, macros: {pro: 8, cho: 45, fat: 10}, groups: ['cereal', 'fruit'],
      ingredientsList: ['harina de avena', 'arándanos', 'plátano', 'levadura'],
      instructions: 'Mezcla harina, polvo de hornear, plátano machacado y arándanos. Hornea 20 min.' },
    { id: 'm42', name: 'Ensalada de Pasta y Atún', image: '🥗', calories: 420, macros: {pro: 25, cho: 55, fat: 12}, groups: ['cereal', 'fish', 'vegetable'],
      ingredientsList: ['pasta integral', 'atún al natural', 'maíz', 'tomates cherry'],
      instructions: 'Cuece la pasta, enfríala y mezcla con atún, maíz y tomatitos cortados por la mitad.' },
    { id: 'm43', name: 'Hummus con Bastones de Zanahoria', image: '🥕', calories: 290, macros: {pro: 10, cho: 35, fat: 14}, groups: ['legume', 'vegetable'],
      ingredientsList: ['garbanzos cocidos', 'tahini', 'limón', 'zanahoria cruda'],
      instructions: 'Tritura los garbanzos con tahini, limón y sal. Sirve con zanahoria pelada en tiras espesas.' },
    { id: 'm44', name: 'Pollo al Limón con Cous Cous', image: '🍋', calories: 450, macros: {pro: 35, cho: 60, fat: 10}, groups: ['meat', 'cereal'],
      ingredientsList: ['pollo', 'zumo de limón', 'cous cous', 'caldo'],
      instructions: 'Macera pollo en limón y a la plancha. Hidrata el cous cous 5 min en caldo muy caliente.' },
    { id: 'm45', name: 'Batido de Proteína y Fruta', image: '🥤', calories: 250, macros: {pro: 25, cho: 30, fat: 5}, groups: ['dairy', 'fruit'],
      ingredientsList: ['leche descremada', 'plátano', 'fresas', 'proteína en polvo (opcional)'],
      instructions: 'Bate la leche bien fría con las frutas picadas hasta que quede homogéneo.' },
    { id: 'm46', name: 'Rodaja de Salmón con Patatas Panadera', image: '🐟', calories: 510, macros: {pro: 32, cho: 40, fat: 26}, groups: ['fish', 'tuber'],
      ingredientsList: ['salmón fresco', 'patatas', 'cebolla', 'aceite de oliva'],
      instructions: 'Corta patatas y cebolla en rodajas horneándolas 20 min. Añade la rodaja de salmón 10 min más.' },
    { id: 'm47', name: 'Ensalada de Alubias Blancas', image: '🥗', calories: 370, macros: {pro: 18, cho: 50, fat: 12}, groups: ['legume', 'vegetable'],
      ingredientsList: ['alubias blancas cocidas', 'pimiento rojo', 'pimiento verde', 'vinagreta'],
      instructions: 'Lava bien las alubias. Pica los pimientos muy finos, mezcla todo y aliña generosamente.' },
    { id: 'm48', name: 'Tosta de Queso Fresco y Nueces', image: '🍞', calories: 330, macros: {pro: 14, cho: 35, fat: 16}, groups: ['cereal', 'dairy', 'nut'],
      ingredientsList: ['pan integral tostado', 'queso fresco', 'nueces', 'miel'],
      instructions: 'Corona la tosta con queso fresco loncheado, trocitos de nuez y un levísimo hilo de miel.' },
    { id: 'm49', name: 'Fideos de Arroz con Pollo y Verduras', image: '🍜', calories: 430, macros: {pro: 30, cho: 60, fat: 8}, groups: ['cereal', 'meat', 'vegetable'],
      ingredientsList: ['fideos de arroz', 'tiras de pollo', 'zanahoria', 'calabacín', 'soja'],
      instructions: 'Saltea verduras en bastones y pollo. Incorpora los fideos hidratados y riega con salsa de soja.' },
    { id: 'm50', name: 'Pisto Manchego', image: '🍅', calories: 240, macros: {pro: 4, cho: 20, fat: 16}, groups: ['vegetable'],
      ingredientsList: ['calabacín', 'pimiento rojo', 'pimiento verde', 'cebolla', 'tomate natural'],
      instructions: 'Trocea muy fino todas las verduras, póchalo a fuego muy lento hasta que forme una mermelada suave.' },
    { id: 'm51', name: 'Sopa de Letras con Huevo Picado', image: '🥣', calories: 280, macros: {pro: 15, cho: 40, fat: 6}, groups: ['cereal', 'egg'],
      ingredientsList: ['pasta de letras', 'caldo de pollo', 'huevo duro'],
      instructions: 'Cuece la pasta de sopa en el caldo. Una vez servido, añade huevo duro picado por encima.' }
];

// --- database.db (food_servings table) Migration ---
// Rule format: { targetMin, targetMax, type (daily/weekly) }
// 100 max means "no realistic upper limit" in this context
const CORE_GUIDELINES = {
    vegetable: { targetMin: 3, targetMax: 100, type: 'day' },
    fruit:     { targetMin: 2, targetMax: 100, type: 'day' },
    tuber:     { targetMin: 0, targetMax: 100, type: 'day' },
    cereal:    { targetMin: 3, targetMax: 100, type: 'day' },
    dairy:     { targetMin: 0, targetMax: 3,   type: 'day' },
    legume:    { targetMin: 4, targetMax: 100, type: 'week' },
    nut:       { targetMin: 3, targetMax: 100, type: 'week' },
    meat:      { targetMin: 0, targetMax: 3,   type: 'week' },
    fish:      { targetMin: 3, targetMax: 100, type: 'week' },
    egg:       { targetMin: 0, targetMax: 4,   type: 'week' },
    oil:       { targetMin: 2, targetMax: 6,   type: 'day' },
    alcohol:   { targetMin: 0, targetMax: 100, type: 'week' } // ideally zero though
};

window.showCustomModal = function(title, contentHtml) {
    const modalHtml = `
        <div id="custom-modal" style="position: fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center; z-index:9999; padding: 20px;">
            <div style="background: white; padding: 24px; border-radius: 16px; width: 100%; max-width: 400px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); position: relative; animation: slideUp 0.3s ease-out;">
                <button onclick="document.getElementById('custom-modal').remove()" style="position: absolute; top: 16px; right: 16px; background: none; border: none; font-size: 20px; cursor: pointer; color: #999; font-weight: bold;">&times;</button>
                <h3 style="margin-top: 0; margin-bottom: 16px; color: #4f46e5; display: flex; align-items: center; gap: 8px;">
                    ${title}
                </h3>
                <div style="font-size: 14px; line-height: 1.6; color: #1e293b;">
                    ${contentHtml}
                </div>
            </div>
        </div>
        <style>@keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }</style>
    `;
    // Remove existing if any
    const existing = document.getElementById('custom-modal');
    if (existing) existing.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
};

// Health Tips Extracted from Context PDFs
const HEALTH_TIPS = [
    { text: "Prioriza siempre el agua como la bebida principal de tu dieta diaria para garantizar una óptima hidratación.", icon: "💧" },
    { text: "Si practicas deportes de resistencia, recuerda consumir suficientes Carbohidratos (CHO) para recargar el glucógeno muscular y mantener tu rendimiento.", icon: "🏃" },
    { text: "Para cocinar, opta por métodos como plancha, vapor o al horno en lugar de frituras. Así reduces la carga extra de grasas innecesarias.", icon: "🔥" },
    { text: "El aceite de oliva es tu mejor aliado, tanto para aliñar como para cocinar a altas temperaturas gracias a su resistencia.", icon: "🫒" },
    { text: "Incorporar variedad de vegetales en tus platos aumenta la riqueza de vitaminas y antioxidantes. ¡Mientras más colores, mejor!", icon: "🌈" },
    { text: "Procura no exceder el consumo de grasas saturadas, dando preferencia a las grasas insaturadas como pescados azules o frutos secos.", icon: "🥜" },
    { text: "Las legumbres son una excelente fuente de proteína vegetal. Consumirlas 3-4 veces por semana es ideal para el organismo y el planeta.", icon: "🍲" }
];

// --- Energy & Macronutrient Logics (User_interview.py & macronutrients_athletes.py) ---
const ACTIVITY_LEVELS = {
    'A': { label: 'Sedentary',     pal: 1.45 },
    'B': { label: 'Lightly Active',pal: 1.6  },
    'C': { label: 'Moderately Active',pal: 1.75 },
    'D': { label: 'Very Active',   pal: 1.95 },
    'E': { label: 'Extremely Active', pal: 2.4 }
};

function calculateEnergyNeeds(profile) {
    if (!profile.age || !profile.weight || !profile.height || !profile.gender) return null;
    
    // Mifflin-St Jeor Equation for BMR 
    let bmr = (10 * profile.weight) + (6.25 * profile.height) - (5 * profile.age);
    bmr += (profile.gender === 'M') ? 5 : -161;
    
    // TDEE (Total Daily Energy Expenditure)
    const pal = ACTIVITY_LEVELS[profile.activityLevel]?.pal || 1.45;
    const tdee = Math.round(bmr * pal);
    
    // Core Recommended Macronutrient Distribution
    // Carbohydrates (CHO): 50%, Proteins (PRO): 15%, Fats (AAGG): 35%
    // 1g PRO = 4 kcal, 1g CHO = 4 kcal, 1g FAT = 9 kcal
    const proteinGrams = (tdee * 0.15) / 4;
    const carbsGrams = (tdee * 0.50) / 4;
    const fatsGrams = (tdee * 0.35) / 9;

    return {
        bmr: Math.round(bmr),
        tdee: tdee,
        proteinGrams: Math.round(proteinGrams),
        carbsGrams: Math.round(carbsGrams),
        fatsGrams: Math.round(fatsGrams)
    };
}

// --- Open Food Facts API Integration ---
/**
 * Realiza una consulta asíncrona a la API de Open Food Facts.
 * Arquitectura: Usa fetch con try...catch para asegurar tolerancia a fallos de red sin bloquear la previsualización ni el hilo principal.
 * Optimización: Parámetros search_simple=1 y json=1 optimizan la carga útil, delegando filtrado pesado al servidor.
 */
async function fetchOFFProduct(searchQuery) {
    if (!searchQuery) return null;
    try {
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(searchQuery)}&search_simple=1&action=process&json=1&page_size=1`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error HTTP OFF API: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.products && data.products.length > 0) {
            const p = data.products[0];
            const n = p.nutriments || {};
            // Sanitización de datos: Extraer solo nutrientes críticos y asegurar un valor fallback (0) 
            // Esto previene errores de 'NaN' o 'undefined' en cálculos posteriores de UI. 
            // Las vitaminas/minerales en la API suelen expresarse en gramos bajo '_100g', por ello el factor x1000.
            return {
                name: p.product_name || searchQuery,
                image: p.image_url || '',
                macros: {
                    pro: Number(n.proteins_100g) || 0,
                    cho: Number(n.carbohydrates_100g) || 0,
                    fat: Number(n.fat_100g) || 0
                },
                calories: Number(n['energy-kcal_100g']) || 0,
                micros: {
                    calcium_mg: (Number(n.calcium_100g) * 1000) || 0,
                    iron_mg: (Number(n.iron_100g) * 1000) || 0,
                    vitamin_c_mg: (Number(n['vitamin-c_100g']) * 1000) || 0
                }
            };
        }
        return null;
    } catch (error) {
        // Fallback silencioso en consola para mantener la UX ininterrumpida
        console.error(`[OFF API] Fallo en la red o parseo al buscar '${searchQuery}':`, error);
        return null;
    }
}

// --- EFSA Dietary Reference Values (DRVs) ---
/**
 * Diccionario constante con Valores de Referencia Dietética (PRI = Population Reference Intake, UL = Tolerable Upper Intake Level)
 * extraídos de la EFSA para calcio, hierro y vitamina C.
 * Arquitectura: Organizar en una estructura inmutable estática (const) permite consultas en O(1) y rápida escalabilidad a nuevos nutrientes.
 */
const EFSA_DRV = {
    calcium_mg: {
        adult_18_24:   { pri: 1000, ul: 2500 },
        adult_over_25: { pri: 950,  ul: 2500 }
    },
    iron_mg: {
        men_over_18:   { pri: 11, ul: null },
        women_18_49:   { pri: 16, ul: null }, // Requerimiento elevado premenopausia
        women_over_50: { pri: 11, ul: null }  // Postmenopausia
    },
    vitamin_c_mg: {
        men:   { pri: 110, ul: null },
        women: { pri: 95,  ul: null }
    }
};

/**
 * Función pura que computa las necesidades de micronutrientes del usuario cruzando la data EFSA_DRV.
 * Arquitectura: Mantener esta función pura (sin mutar variables globales ni tocar el DOM) 
 * asegura predictibilidad, testabilidad unitaria y cero dependencias de estado.
 */
const getUserMicronutrientNeeds = (profile) => {
    // Valores por defecto seguros (fallback) asumiendo perfil adulto masculino promedio si faltan datos demográficos
    let needs = {
        calcium: EFSA_DRV.calcium_mg.adult_over_25,
        iron:    EFSA_DRV.iron_mg.men_over_18,
        vitaminC:EFSA_DRV.vitamin_c_mg.men
    };
    
    if (!profile || !profile.age || !profile.gender) {
        return needs;
    }

    const age = parseInt(profile.age, 10);
    const isFemale = profile.gender === 'F';

    // Precisión Condicional: Ajustes demográficos basados en edad y sexo.
    needs.calcium = (age >= 18 && age <= 24) 
                    ? EFSA_DRV.calcium_mg.adult_18_24 
                    : EFSA_DRV.calcium_mg.adult_over_25;

    if (isFemale) {
        needs.iron = (age >= 50) 
                     ? EFSA_DRV.iron_mg.women_over_50 
                     : EFSA_DRV.iron_mg.women_18_49;
        needs.vitaminC = EFSA_DRV.vitamin_c_mg.women;
    } else {
        needs.iron = EFSA_DRV.iron_mg.men_over_18;
        needs.vitaminC = EFSA_DRV.vitamin_c_mg.men;
    }

    return needs;
};

// --- AI Integration (Dynamic Model) ---
function getAIModel() {
    return localStorage.getItem('aesan_gemini_model') || 'gemini-2.5-flash';
}

async function generateAITip() {
    const apiKey = localStorage.getItem('aesan_gemini_key');
    if (!apiKey) return null;
    
    const model = getAIModel();
    const prompt = `Eres un nutricionista experto. Escribe un tip saludable muy breve (máximo 2 oraciones) sobre nutrición deportiva, hidratación, o técnicas de cocina saludables. Sé directo y amigable.`;
    
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
             return "✨ IA: " + data.candidates[0].content.parts[0].text.trim();
        }
    } catch(e) { console.error("AI Tip Error:", e); }
    return null;
}

async function generateAIMeals(groupsList, energy) {
    const apiKey = localStorage.getItem('aesan_gemini_key');
    if (!apiKey) return null;

    const groupsStr = groupsList.join(', ');
    const prompt = `Actúa como un nutricionista experto. El usuario tiene disponibles los siguientes grupos de alimentos: "${groupsStr}". 
Invéntate 2 recomendaciones de comida saludables que utilicen PRIORITARIAMENTE estos grupos de alimentos.
Objetivos diarios del usuario: ${energy.tdee} kcal, PRO: ${energy.proteinGrams}g, CHO: ${energy.carbsGrams}g, GRASAS: ${energy.fatsGrams}g. 
Las recetas deben ser porciones de 1 comida (aprox. 30% del objetivo diario).
IMPORTANTE: Especifica pesos reales en gramos para cada ingrediente (ej. "150g pechuga de pollo").
Responde EXCLUSIVAMENTE con un arreglo (array) en formato JSON válido, sin markdown ni backticks, con esta estructura exacta para cada receta:
[
  {
    "name": "Nombre creativo de la receta",
    "groups": ["vegetable", "meat", "cereal"], // usa solo: vegetable, fruit, cereal, legume, meat, fish, dairy, egg, nut, oil
    "portionBreakdown": { "vegetable": 1, "meat": 1, "cereal": 1 }, // porciones estimadas (pueden ser decimales ej 0.5)
    "calories": 450,
    "macros": { "pro": 30, "cho": 45, "fat": 15 },
    "ingredients": ["150g pollo", "200g brócoli"],
    "instructions": "Instrucciones breves paso a paso"
  }
]`;

    const model = getAIModel();
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { response_mime_type: "application/json" }
            })
        });
        
        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            const rawText = data.candidates[0].content.parts[0].text;
            let jsonString = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
            const meals = JSON.parse(jsonString);
            return meals.map(m => ({ ...m, image: '✨' }));
        }
    } catch (e) {
        console.error("AI Meal Error:", e);
    }
    return null;
}


function evaluateDiet(history) {
    const now = new Date();
    const todayHits = {};
    const weekHits = {};
    let todayMicros = { calcium: 0, iron: 0, vC: 0 };
    
    Object.keys(CORE_GUIDELINES).forEach(g => {
        todayHits[g] = 0;
        weekHits[g] = 0;
    });

    history.forEach(entry => {
        const entryDate = new Date(entry.timestamp);
        const isToday = entryDate.toDateString() === now.toDateString();
        const diffTime = Math.abs(now - entryDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        const isThisWeek = diffDays <= 7;

        if (entry.meal) {
            // Legacy mapping for old data in localStorage
            entry.meal.groups.forEach(groupRaw => {
                let group = groupRaw;
                if(group === 'vegetables') group = 'vegetable';
                if(group === 'fruits') group = 'fruit';
                if(group === 'cereals') group = 'cereal';
                if(group === 'legumes') group = 'legume';
                if(group === 'meat_white' || group === 'meat_red') group = 'meat';
                if(groupRaw === 'healthy_fats') return; 
                
                if (CORE_GUIDELINES[group]) {
                    if (isToday) {
                        todayHits[group] += 1;
                        if (PORTIONS_GUIDE[group] && PORTIONS_GUIDE[group].micros) {
                            todayMicros.calcium += PORTIONS_GUIDE[group].micros.calcium;
                            todayMicros.iron += PORTIONS_GUIDE[group].micros.iron;
                            todayMicros.vC += PORTIONS_GUIDE[group].micros.vC;
                        }
                    }
                    if (isThisWeek) weekHits[group] += 1;
                }
            });
        } else if (entry.portions) {
            // New V3 format logging distinct portions
            Object.keys(entry.portions).forEach(group => {
                const qty = parseFloat(entry.portions[group]) || 0;
                if (CORE_GUIDELINES[group]) {
                    if (isToday) {
                        todayHits[group] += qty;
                        if (PORTIONS_GUIDE[group] && PORTIONS_GUIDE[group].micros) {
                            todayMicros.calcium += PORTIONS_GUIDE[group].micros.calcium * qty;
                            todayMicros.iron += PORTIONS_GUIDE[group].micros.iron * qty;
                            todayMicros.vC += PORTIONS_GUIDE[group].micros.vC * qty;
                        }
                    }
                    if (isThisWeek) weekHits[group] += qty;
                }
            });
        }
    });

    return { todayHits, weekHits, todayMicros };
}

function getRecommendations(history) {
    const state = evaluateDiet(history);
    const groupScores = {};
    
    Object.entries(CORE_GUIDELINES).forEach(([group, rules]) => {
        let score = 0;
        let currentAmount = rules.type === 'day' ? state.todayHits[group] : state.weekHits[group];
        
        if (rules.targetMin && currentAmount < rules.targetMin) {
            score += (rules.targetMin - currentAmount) * 10; 
        }
        
        // Prevent exceeding max limits (like meat=3)
        if (rules.targetMax && rules.targetMax < 100) { 
            if (currentAmount >= rules.targetMax) {
                score -= 100; // Hard limit penalty
            } else if (currentAmount === rules.targetMax - 1) {
                score -= 15; // Warning penalty
            }
        }
        
        groupScores[group] = score;
    });

    const scoredMeals = mealsDatabase.map(meal => {
        let mealScore = 0;
        meal.groups.forEach(g => {
            let mapped = g;
            if(g === 'vegetables') mapped = 'vegetable';
            if(g === 'fruits') mapped = 'fruit';
            if(g === 'cereals') mapped = 'cereal';
            if(g === 'legumes') mapped = 'legume';
            if(g === 'meat_white' || g === 'meat_red') mapped = 'meat';
            mealScore += (groupScores[mapped] || 0);
        });
        
        mealScore += (Math.random() * 20); // Adds a shuffle element amongst similar scores
        return { ...meal, score: mealScore };
    });

    scoredMeals.sort((a, b) => b.score - a.score);
    return scoredMeals.slice(0, 3);
}

// --- app.js (UI Logic) ---
let userHistory = JSON.parse(localStorage.getItem('aesan_history')) || [];
let userProfile = JSON.parse(localStorage.getItem('aesan_profile')) || null;
let currentView = 'home';
let activeFilters = []; // For filtering suggestions

const mainContent = document.getElementById('main-content');
const navButtons = document.querySelectorAll('.nav-btn');

function renderView(viewName) {
    currentView = viewName;
    updateNavButtons(viewName);
    
    // Update bottom nav labels based on language
    const lnProg = document.getElementById('nav-progreso'); if(lnProg) lnProg.innerText = t('prog_tab');
    const lnSug = document.getElementById('nav-sugerencias'); if(lnSug) lnSug.innerText = t('sug_tab');
    const lnPor = document.getElementById('nav-porciones'); if(lnPor) lnPor.innerText = t('portions_tab');
    const lnProf = document.getElementById('nav-perfil'); if(lnProf) lnProf.innerText = t('prof_tab');
    const lnProd = document.getElementById('nav-productos'); if(lnProd) lnProd.innerText = t('prod_tab');

    // Force user to profile if first time
    if (!userProfile && viewName !== 'profile') {
        alert(t('first_time'));
        renderView('profile');
        return;
    }
    
    switch(viewName) {
        case 'home':
            renderHome();
            break;
        case 'suggestions':
            renderSuggestions();
            break;
        case 'profile':
            renderProfile();
            break;
        case 'portions':
            renderPortions();
            break;
        case 'products':
            renderProducts();
            break;
    }
}

function updateNavButtons(activeView) {
    navButtons.forEach(btn => {
        if (btn.dataset.view === activeView) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- View: Products (OFF Search & Timeline) ---
let lastOFFResult = null;

function renderProducts() {
    let timelineHtml = '';
    const now = new Date();
    
    // Filter history for products logged today
    const todaysProducts = userHistory.filter(entry => {
        if (!entry.product) return false;
        const entryDate = new Date(entry.timestamp);
        return entryDate.toDateString() === now.toDateString();
    });

    if (todaysProducts.length === 0) {
        timelineHtml = \`<div style="color: var(--text-muted); font-size: 14px; padding: 20px; text-align: center; border: 1px dashed rgba(0,0,0,0.1); border-radius: 12px; margin-top: 10px;">\${t('prod_empty')}</div>\`;
    } else {
        timelineHtml = \`<div style="display: flex; overflow-x: auto; scroll-snap-type: x mandatory; padding: 10px 0; gap: 12px; -webkit-overflow-scrolling: touch;">\`;
        todaysProducts.forEach(entry => {
            const timeStr = new Date(entry.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            timelineHtml += \`
                <div style="min-width: 140px; scroll-snap-align: center; background: rgba(255,255,255,0.8); border: 1px solid rgba(0,0,0,0.05); border-radius: 12px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.02); flex-shrink: 0;">
                    <div style="font-size: 11px; font-weight: 600; color: var(--text-muted); margin-bottom: 6px; background: rgba(0,0,0,0.04); padding: 2px 8px; border-radius: 10px;">\${timeStr}</div>
                    \${entry.product.image ? \`<img src="\${entry.product.image}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px; margin-bottom: 8px; border: 1px solid rgba(0,0,0,0.1);">\` : \`<div style="font-size: 24px; margin-bottom: 8px;">📦</div>\`}
                    <div style="font-size: 13px; font-weight: bold; line-height: 1.2; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 4px;">\${entry.product.name}</div>
                    <div style="font-size: 12px; color: var(--primary-color); font-weight: 600;">\${Math.round(entry.product.calories)} kcal</div>
                </div>\`;
        });
        timelineHtml += \`</div>\`;
    }

    let searchResultHtml = '';
    if (lastOFFResult) {
        searchResultHtml = \`
            <div style="background: white; border-radius: 12px; padding: 16px; margin-top: 16px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid var(--primary-light);">
                <div style="display: flex; gap: 12px; align-items: center; margin-bottom: 12px;">
                    \${lastOFFResult.image ? \`<img src="\${lastOFFResult.image}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px;">\` : \`<div style="font-size: 32px;">📦</div>\`}
                    <div>
                        <h4 style="margin: 0 0 4px 0; font-size: 16px;">\${lastOFFResult.name}</h4>
                        <div style="font-size: 12px; color: var(--text-muted);">\${Math.round(lastOFFResult.calories)} \${t('prod_cal')}</div>
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid rgba(0,0,0,0.05);">
                    <div style="text-align: center;"><strong>PRO</strong><br>\${Math.round(lastOFFResult.macros.pro)}g</div>
                    <div style="text-align: center;"><strong>CHO</strong><br>\${Math.round(lastOFFResult.macros.cho)}g</div>
                    <div style="text-align: center;"><strong>AAGG</strong><br>\${Math.round(lastOFFResult.macros.fat)}g</div>
                </div>
                <button onclick="logOFFProduct()" class="btn btn-primary" style="width: 100%; border-radius: 8px; padding: 12px; font-weight: bold;">+ \${t('prod_logging')}</button>
            </div>
        \`;
    }

    let html = \`
        <h2>\${t('prod_title')} 🔍</h2>
        <p style="margin-bottom: 20px; color: var(--text-muted); font-size: 14px; line-height: 1.5;">\${t('prod_desc')}</p>
        
        <div class="glass-card" style="padding: 16px; margin-bottom: 24px;">
            <div style="display: flex; gap: 8px;">
                <input type="text" id="off-search-input" placeholder="\${t('prod_search_ph')}" style="flex: 1; padding: 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1); font-size: 15px; font-family: inherit;">
                <button onclick="handleOFFSearch()" class="btn btn-primary" style="padding: 12px 16px; border-radius: 8px; border: none; background: var(--primary-color); color: white; display:flex; align-items:center; justify-content:center;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </button>
            </div>
            
            <div id="off-loading-state" style="display: none; text-align: center; padding: 20px; color: var(--primary-light);">
                <span class="spinner" style="display: inline-block; width: 24px; height: 24px; border: 3px solid rgba(0,0,0,0.1); border-radius: 50%; border-top-color: var(--primary-color); animation: spin 1s ease-in-out infinite;"></span>
                <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
                <div style="margin-top: 8px; font-size: 13px; font-weight: 500;">Buscando...</div>
            </div>

            <div id="off-search-result-container">
                \${searchResultHtml}
            </div>
        </div>

        <h3 style="margin-bottom: 12px;">\${t('prod_timeline')} ⏱️</h3>
        \${timelineHtml}
    \`;

    mainContent.innerHTML = html;
}

// Handlers for Products View
async function handleOFFSearch() {
    const input = document.getElementById('off-search-input');
    const query = input.value.trim();
    if (!query) return;

    // Show loading
    document.getElementById('off-search-result-container').innerHTML = '';
    document.getElementById('off-loading-state').style.display = 'block';

    const result = await fetchOFFProduct(query);
    
    document.getElementById('off-loading-state').style.display = 'none';

    if (result) {
        lastOFFResult = result;
    } else {
        lastOFFResult = null;
        document.getElementById('off-search-result-container').innerHTML = \`<div style="color: var(--accent-color); font-size: 14px; padding: 16px; text-align: center; background: rgba(255,0,0,0.05); border-radius: 12px; margin-top: 16px;">No se encontró ningún producto exacto. Intenta ser más específico.</div>\`;
        return;
    }
    
    // Re-render to show result
    renderProducts();
}

function logOFFProduct() {
    if (!lastOFFResult) return;

    const record = {
        timestamp: new Date().toISOString(),
        product: lastOFFResult // Format V13
    };
    
    userHistory.unshift(record);
    localStorage.setItem('aesan_history', JSON.stringify(userHistory));
    
    // Clear search and show success
    lastOFFResult = null;
    window.showCustomModal('Exito ✅', 'Producto registrado en tu diario de consumo.');
    renderProducts();
}

function renderHome() {
    const recommendations = getRecommendations(userHistory);
    const state = evaluateDiet(userHistory);
    
    // Show Energy Targets on Home
    const energy = calculateEnergyNeeds(userProfile) || { tdee: 0, proteinGrams: 0, carbsGrams: 0, fatsGrams: 0 };
    
    // Generate dynamic progress grid for all food groups
    const groupsToDisplay = [
        { id: 'vegetable', label: t('vegetables'), icon: '🥗' },
        { id: 'fruit', label: t('fruits'), icon: '🍎' },
        { id: 'cereal', label: t('cereals'), icon: '🌾' },
        { id: 'legume', label: t('legumes'), icon: '🍲' },
        { id: 'fish', label: t('fish'), icon: '🐟' },
        { id: 'meat', label: t('meats'), icon: '🥩' },
        { id: 'dairy', label: t('dairy'), icon: '🥛' },
        { id: 'egg', label: t('eggs'), icon: '🥚' },
        { id: 'nut', label: t('nuts'), icon: '🥜' },
        { id: 'oil', label: t('oil'), icon: '🫒' }
    ];
    let progressHtml = '';
    groupsToDisplay.forEach(g => {
        const rules = CORE_GUIDELINES[g.id];
        if(!rules) return;
        
        // Ensure max is represented cleanly per user request (no fraction if no max limit)
        let hits = rules.type === 'day' ? state.todayHits[g.id] : state.weekHits[g.id];
        let targetText = '';
        if (rules.targetMax < 100) {
            targetText = `/${rules.targetMax}`;
        }
        
        let suffix = rules.type === 'day' ? t('day') : t('week');
        let tooltipText = `${t('recommendation')}: ${rules.targetMin > 0 ? t('min_label') + ' ' + rules.targetMin : ''} ${rules.targetMax < 100 ? t('max_label') + ' ' + rules.targetMax : ''} ${t('servings_per')} ${suffix.toLowerCase()}`;
        
        let color = 'var(--text-main)';
        if (rules.targetMin > 0 && hits >= rules.targetMin) color = 'var(--secondary-color)';
        if (rules.targetMax < 100 && hits >= rules.targetMax) color = 'var(--accent-color)';
        if (rules.targetMax < 100 && hits > rules.targetMax) color = 'red'; // Exceeded limit

        progressHtml += `
            <div style="background: rgba(255,255,255,0.4); padding: 8px 4px; border-radius: 8px; display: flex; flex-direction: column; align-items: center; justify-content: center; position: relative;">
                <span style="position: absolute; top: 4px; right: 4px; font-size: 10px; cursor: pointer; color: var(--primary-color); background: rgba(255,255,255,0.7); border-radius: 50%; width: 14px; height: 14px; text-align: center; line-height: 14px; font-weight: bold;" onclick="window.showCustomModal('${t('recommendation')} ${g.label} ${g.icon}', '${tooltipText}')">?</span>
                <div style="font-size: 20px; margin-bottom: 2px;">${g.icon}</div>
                <div style="font-size: 15px; font-weight: bold; color: ${color};">
                    ${hits}${targetText}
                </div>
                <div style="font-size: 10px; color: var(--text-muted); line-height: 1.1; margin-top: 2px; text-align: center;">${g.label}<br>(${suffix})</div>
            </div>
        `;
    });

    let html = `
        <h2>${t('hello')} ${userProfile ? userProfile.name : ''}! 👋</h2>
        
        <div class="glass-card" style="margin-bottom: 24px; position: relative;">
            <button onclick="window.showMacroInfo()" style="position: absolute; top: 12px; right: 12px; background:var(--primary-color); color:white; border:none; border-radius:50%; width:20px; height:20px; font-size:12px; cursor:pointer; display:flex; align-items:center; justify-content:center; font-weight:bold; z-index: 10;">?</button>
            <div style="display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <span style="font-size: 12px; color: var(--text-muted); text-transform: uppercase;">${t('daily_goal')}</span>
                    <div style="font-size: 28px; font-weight: 700; color: var(--primary-color)">${energy.tdee} <span style="font-size: 16px;">kcal</span></div>
                </div>
                <div style="text-align: right; margin-right: 16px;">
                    <div style="font-size: 14px;"><strong>PRO:</strong> ${energy.proteinGrams}g</div>
                    <div style="font-size: 14px;"><strong>CHO:</strong> ${energy.carbsGrams}g</div>
                    <div style="font-size: 14px;"><strong>AAGG:</strong> ${energy.fatsGrams}g</div>
                </div>
            </div>
        </div>
        
        <h3 style="margin-bottom: 12px;">${t('progress')}</h3>
        <div class="glass-card" style="padding: 16px 12px; margin-bottom: 24px;">
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
                ${progressHtml}
            </div>
        </div>

        <h3 style="margin-bottom: 12px;">Micronutrientes Críticos (EFSA)</h3>
        <p style="font-size: 11px; margin-top: -8px; margin-bottom: 12px; color: var(--text-muted); line-height: 1.3;">
            Estimación basada en porciones diarias.<br>El target ("PRI" o Ingesta Diaria Recomendada) se calcula según tu perfil activo.
        </p>
        <div class="glass-card" style="padding: 14px 12px; margin-bottom: 24px;">
            <div style="display: flex; flex-direction: column; gap: 12px;">
                ${(() => {
                    const micros = getUserMicronutrientNeeds(userProfile);
                    const current = state.todayMicros;
                    const renderBar = (label, icon, currentVal, targetVal, unit) => {
                        const percent = Math.min(100, (currentVal / targetVal) * 100);
                        let barColor = 'var(--accent-color)'; // Red
                        if (percent >= 50) barColor = '#fbbf24'; // Yellow
                        if (percent >= 80) barColor = 'var(--secondary-color)'; // Green
                        
                        return `
                            <div>
                                <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px; font-weight: 500;">
                                    <span>${icon} ${label}</span>
                                    <span>${Math.round(currentVal)} / ${targetVal} ${unit} (${Math.round(percent)}%)</span>
                                </div>
                                <div style="width: 100%; height: 8px; background: rgba(0,0,0,0.05); border-radius: 4px; overflow: hidden;">
                                    <div style="width: ${percent}%; height: 100%; background: ${barColor}; border-radius: 4px; transition: width 0.5s ease;"></div>
                                </div>
                            </div>
                        `;
                    };
                    
                    return renderBar('Calcio', '🦴', current.calcium, micros.calcium.pri, 'mg') +
                           renderBar('Hierro', '🩸', current.iron, micros.iron.pri, 'mg') +
                           renderBar('Vitamina C', '🍊', current.vC, micros.vitaminC.pri, 'mg');
                })()}
            </div>
        </div>

        <div class="glass-card" style="padding: 12px 16px; margin-bottom: 24px; display: flex; align-items: flex-start; gap: 12px; background: rgba(255,255,255,0.6);">

            <div id="tip-icon" style="font-size: 24px; margin-top: 4px;">💡</div>
            <div style="flex: 1;">
                <h4 style="margin: 0 0 4px 0; font-size: 14px; display: flex; justify-content: space-between;">
                    ${t('tip_title')}
                    <button id="btn-next-tip" style="background:none; border:none; color: var(--primary-color); font-size: 11px; cursor: pointer; text-decoration: underline;">${t('tip_next')}</button>
                </h4>
                <p id="tip-text" style="margin: 0; font-size: 13px; color: var(--text-main); line-height: 1.4;"></p>
            </div>
        </div>
    `;

    mainContent.innerHTML = html;

    // Macro Info Modal Logic
    window.showMacroInfo = () => {
        const modalHtml = `
            <div id="macro-modal" style="position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.5); z-index:9999; display:flex; justify-content:center; align-items:center; padding: 20px;">
                <div class="glass-card" style="background:#fff; max-width:400px; padding:24px; border-radius:16px; position:relative;">
                    <button onclick="document.getElementById('macro-modal').remove()" style="position:absolute; top:12px; right:16px; background:none; border:none; font-size:20px; cursor:pointer; color:#999;">&times;</button>
                    <h3 style="margin-top:0; color:#4f46e5; display:flex; align-items:center; gap:8px;">
                        <span style="font-size:24px;">📊</span> ${t('macro_title')}
                    </h3>
                    <div style="font-size:14px; color:#1e293b; line-height:1.6;">
                        <p><strong>PRO (Proteínas):</strong> ${t('macro_pro')}</p>
                        <p><strong>CHO (Carbohidratos):</strong> ${t('macro_cho')}</p>
                        <p><strong>AAGG (Grasas / Fats):</strong> ${t('macro_fat')}</p>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    };

    // Carousel Logic
    // Carousel Logic
    let currentTipIndex = 0;
    const showTip = () => {
        if (!document.getElementById('tip-text')) return;
        document.getElementById('tip-text').innerText = HEALTH_TIPS[currentTipIndex].text;
        document.getElementById('tip-icon').innerText = HEALTH_TIPS[currentTipIndex].icon;
    };
    
    // Initial display
    showTip();

    // Auto rotate every 60 seconds
    let tipInterval = setInterval(() => {
        if(document.getElementById('tip-text')) {
            currentTipIndex = (currentTipIndex + 1) % HEALTH_TIPS.length;
            showTip();
        } else {
            clearInterval(tipInterval);
        }
    }, 60000);

    // Manual Skip
    document.getElementById('btn-next-tip').addEventListener('click', async () => {
        const textEl = document.getElementById('tip-text');
        const iconEl = document.getElementById('tip-icon');
        if (!textEl || !iconEl) return;
        
        clearInterval(tipInterval); // Pause auto-rotation while thinking or if user takes control
        
        if (localStorage.getItem('aesan_gemini_key')) {
             textEl.innerHTML = `<em>${t('ai_thinking_tip')}</em>`;
             iconEl.innerText = '✨';
             
             const aiTip = await generateAITip();
             if(aiTip) {
                 textEl.innerText = aiTip;
                 return; // Keep interval cleared so they can read it
             }
        }
        
        currentTipIndex = (currentTipIndex + 1) % HEALTH_TIPS.length;
        showTip();
        
        tipInterval = setInterval(() => {
            currentTipIndex = (currentTipIndex + 1) % HEALTH_TIPS.length;
            if(document.getElementById('tip-text')) showTip();
            else clearInterval(tipInterval);
        }, 60000);
    });
}

function renderSuggestions() {
    let recommendations = getRecommendations(userHistory);

    // If filters are active, prioritize those groups in local search
    if (activeFilters.length > 0) {
        recommendations = mealsDatabase.filter(m => 
            activeFilters.some(f => m.groups.includes(f))
        ).sort((a, b) => {
            // Count how many matches each meal has with active filters
            const aMatches = a.groups.filter(g => activeFilters.includes(g)).length;
            const bMatches = b.groups.filter(g => activeFilters.includes(g)).length;
            return bMatches - aMatches;
        }).slice(0, 8);
    }

    let chipsHtml = Object.entries(PORTIONS_GUIDE).map(([id, info]) => {
        const isActive = activeFilters.includes(id);
        const activeClass = isActive ? 'active-chip' : '';
        return `
            <div class="filter-chip ${activeClass}" onclick="window.toggleFilterChip('${id}')">
                <span>${info.icon}</span> ${t(info.key)}
            </div>
        `;
    }).join('');

    let recHtml = '';
    if (recommendations.length === 0) {
        recHtml = `<div class="glass-card" style="text-align:center; color:var(--text-muted); padding: 20px;">${t('no_results')}</div>`;
    } else {
        recommendations.forEach(meal => {
            const ingString = meal.ingredientsList ? meal.ingredientsList.join(', ') : 'Varios ingredientes';
            const instString = meal.instructions || 'Sigue receta habitual.';
            const portions = meal.portionBreakdown || {};
            
            recHtml += `
                <div class="glass-card" style="margin-bottom: 16px; padding: 16px;">
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
                        <div style="font-size: 40px; background: rgba(255,255,255,0.5); border-radius: 12px; padding: 10px;">
                            ${meal.image}
                        </div>
                        <div>
                            <h4 style="margin: 0 0 4px 0; font-size: 16px;">${meal.name}</h4>
                            <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 6px;">
                                ${meal.groups.map(g => `<span class="badge badge-${g}" style="font-size: 10px;">${g}</span>`).join('')}
                            </div>
                            <div style="display: flex; gap: 8px; font-size: 12px; color: var(--text-muted);">
                                <span><strong>${meal.calories}</strong> kcal</span>
                                <span>•</span>
                                <span>PRO: ${meal.macros?.pro || 0}g</span>
                                <span>CHO: ${meal.macros?.cho || 0}g</span>
                                <span>AAGG: ${meal.macros?.fat || 0}g</span>
                            </div>
                        </div>
                    </div>
                    
                    <div style="background: rgba(255,255,255,0.3); border-radius: 8px; padding: 12px; font-size: 13px;">
                        <strong style="color: var(--primary-color);">${t('ingredients_label')}</strong>
                        <p style="margin: 4px 0 12px 0; color: var(--text-main); line-height: 1.4;">${ingString}</p>
                        <strong style="color: var(--primary-color);">${t('instructions_label')}</strong>
                        <p style="margin: 4px 0 0 0; color: var(--text-main); line-height: 1.4;">${instString}</p>
                        
                        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.05); display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
                            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.7; width: 100%; margin-bottom: 2px;">Porciones estimadas:</span>
                            ${Object.entries(portions).map(([g, v]) => `
                                <span style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary-color); padding: 2px 8px; border-radius: 12px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                                    ${PORTIONS_GUIDE[g] ? PORTIONS_GUIDE[g].icon : ''} <b>${v}</b> ${t(PORTIONS_GUIDE[g]?.key || g)}
                                </span>
                            `).join('')}
                        </div>
                        <button class="btn-primary" onclick='window.registerMealPortions(${JSON.stringify(portions)})' style="width: 100%; margin-top: 12px; padding: 8px; font-size: 13px; background: var(--secondary-color);">
                            ✅ Añadir porciones a hoy
                        </button>
                    </div>
                </div>
            `;
        });
    }

    let html = `
        <h2 style="margin-bottom: 4px;">${t('fridge_title')}</h2>
        <p class="text-muted" style="margin-bottom: 20px;">${t('fridge_desc')}</p>
        
        <div class="chips-container">
            ${chipsHtml}
        </div>

        <div style="display: flex; gap: 12px; margin-bottom: 24px;">
            <button class="btn-primary" onclick="window.renderSuggestions()" style="flex: 1; font-size: 14px; padding: 12px;">${t('search_btn')}</button>
            <button class="btn-primary" onclick="window.handleAISearch()" style="flex: 1; font-size: 14px; padding: 12px; background: var(--primary-color);">${t('search_ai_btn')}</button>
        </div>
        
        <hr style="opacity: 0.1; margin-bottom: 20px;">

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h3 style="margin: 0;">${t('smart_sug')}</h3>
            <button onclick="window.clearFilters()" style="background:none; border:none; color: var(--primary-color); font-size: 12px; cursor: pointer;">
                ${t('reload_btn')}
            </button>
        </div>

        <div id="suggestions-container">
            ${recHtml}
        </div>
    `;

    mainContent.innerHTML = html;

    window.toggleFilterChip = (id) => {
        if (activeFilters.includes(id)) activeFilters = activeFilters.filter(f => f !== id);
        else activeFilters.push(id);
        renderSuggestions();
    };

    window.clearFilters = () => {
        activeFilters = [];
        renderSuggestions();
    };

    window.handleAISearch = async () => {
        if (activeFilters.length === 0) {
            window.showCustomModal('💡 Info', 'Por favor, selecciona al menos un grupo de alimentos para que el Chef IA te ayude.');
            return;
        }

        const apiKey = localStorage.getItem('aesan_gemini_key');
        if (!apiKey) {
            window.showCustomModal('⚠️ IA No Configurada', 'Para usar el Chef IA, introduce tu API Key en la pestaña de Perfil.');
            return;
        }

        const mainContainer = document.getElementById('suggestions-container');
        if (mainContainer) {
            mainContainer.innerHTML = `
                <div style="text-align:center; padding: 40px; background: var(--card-bg); border-radius: 20px; border: 1px solid var(--glass-border);">
                    <div style="font-size: 50px; animation: pulse 1s infinite alternate;">🧑‍🍳</div>
                    <h3 style="color: var(--primary-color); margin-top: 16px;">${t('ai_cooking')}</h3>
                    <p class="text-muted" style="font-size: 14px;">${t('ai_generating')} ${activeFilters.map(f => t(PORTIONS_GUIDE[f].key)).join(', ')}</p>
                </div>
                <style>@keyframes pulse { 0% { opacity: 0.6; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }</style>
            `;
        }

        const e = calculateEnergyNeeds(userProfile) || { tdee: 2000, proteinGrams: 100, carbsGrams: 200, fatsGrams: 60 };
        const aiMeals = await generateAIMeals(activeFilters.map(f => t(PORTIONS_GUIDE[f].key)), e);
        
        if (aiMeals && aiMeals.length > 0) {
            let aiHtml = '';
            aiMeals.forEach(meal => {
                const ingString = Array.isArray(meal.ingredients) ? meal.ingredients.join(', ') : (meal.ingredients || '');
                const instString = meal.instructions || '';
                const pBreakdown = meal.portionBreakdown || {};

                aiHtml += `
                    <div class="glass-card" style="margin-bottom: 16px; padding: 16px; border-top: 4px solid var(--primary-color);">
                        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
                            <div style="font-size: 40px; background: rgba(255,255,255,0.5); border-radius: 12px; padding: 10px;">✨</div>
                            <div>
                                <h4 style="margin: 0 0 4px 0; font-size: 16px;">${meal.name}</h4>
                                <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 6px;">
                                    ${(meal.groups || []).map(g => `<span class="badge badge-${g}" style="font-size: 10px;">${g}</span>`).join('')}
                                </div>
                                <div style="display: flex; gap: 8px; font-size: 12px; color: var(--text-muted);">
                                    <span><strong>${meal.calories || 0}</strong> kcal</span>
                                    <span>•</span>
                                    <span>PRO: ${meal.macros?.pro || 0}g</span>
                                    <span>CHO: ${meal.macros?.cho || 0}g</span>
                                    <span>AAGG: ${meal.macros?.fat || 0}g</span>
                                </div>
                            </div>
                        </div>
                        <div style="background: rgba(255,255,255,0.3); border-radius: 8px; padding: 12px; font-size: 13px;">
                            <strong style="color: var(--primary-color);">${t('ingredients_label')}</strong>
                            <p style="margin: 4px 0 12px 0; color: var(--text-main); line-height: 1.4;">${ingString}</p>
                            <strong style="color: var(--primary-color);">${t('instructions_label')}</strong>
                            <p style="margin: 4px 0 0 0; color: var(--text-main); line-height: 1.4;">${instString}</p>
                            
                            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(0,0,0,0.05); display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
                                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.7; width: 100%; margin-bottom: 2px;">Porciones estimadas:</span>
                                ${Object.entries(pBreakdown).map(([g, v]) => `
                                    <span style="background: rgba(var(--primary-rgb), 0.1); color: var(--primary-color); padding: 2px 8px; border-radius: 12px; font-size: 12px; display: flex; align-items: center; gap: 4px;">
                                        ${PORTIONS_GUIDE[g] ? PORTIONS_GUIDE[g].icon : ''} <b>${v}</b> ${t(PORTIONS_GUIDE[g]?.key || g)}
                                    </span>
                                `).join('')}
                            </div>
                            <button class="btn-primary" onclick='window.registerMealPortions(${JSON.stringify(pBreakdown)})' style="width: 100%; margin-top: 12px; padding: 8px; font-size: 13px; background: var(--secondary-color);">
                                ✅ Añadir porciones a hoy
                            </button>
                        </div>
                    </div>
                `;
            });
            if (mainContainer) mainContainer.innerHTML = aiHtml;
        } else {
            if (mainContainer) mainContainer.innerHTML = `<div class="glass-card" style="text-align:center; padding: 20px;">Chef IA no ha podido generar recetas en este momento. Inténtalo de nuevo.</div>`;
        }
    };
}

function renderPortions() {
    // Load today's accumulated portions from localStorage
    const todayKey = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    let todayPortions = JSON.parse(localStorage.getItem('aesan_today_portions') || '{}');
    if (todayPortions._date !== todayKey) {
        todayPortions = { _date: todayKey }; // Reset for new day
    }

    function saveTodayPortions() {
        localStorage.setItem('aesan_today_portions', JSON.stringify(todayPortions));
        // Also sync to history for the progress grid
        const todayEntry = userHistory.find(e => e.timestamp && e.timestamp.startsWith(todayKey));
        const portionsCopy = { ...todayPortions };
        delete portionsCopy._date;
        if (todayEntry) {
            todayEntry.portions = portionsCopy;
        } else {
            userHistory.push({ timestamp: new Date().toISOString(), portions: portionsCopy });
        }
        localStorage.setItem('aesan_history', JSON.stringify(userHistory));
    }

    let cardsHtml = '';
    Object.entries(PORTIONS_GUIDE).forEach(([key, info]) => {
        const currentVal = todayPortions[key] || 0;
        cardsHtml += `
            <div class="glass-card" style="margin-bottom: 12px; display: flex; align-items: center; gap: 14px; padding: 14px; position: relative;">
                <div style="font-size: 36px; min-width: 50px; text-align: center;">
                    ${info.icon}
                </div>
                <div style="flex: 1; min-width: 0;">
                    <div style="display: flex; align-items: center; gap: 6px;">
                        <h4 style="margin: 0; text-transform: capitalize; font-size: 16px; color: var(--primary-color);">${t(info.key)}</h4>
                        <span onclick="window.showCustomModal('${t(info.key)} ${info.icon}', '${info.details.replace(/'/g, "\\'")}')" style="display:inline-flex; align-items:center; justify-content:center; width:18px; height:18px; border-radius:50%; background:var(--primary-color); color:white; font-size:11px; font-weight:bold; cursor:pointer; flex-shrink:0;">?</span>
                    </div>
                    <span style="display: inline-block; background: var(--secondary-color); color: white; padding: 1px 7px; border-radius: 12px; font-size: 11px; font-weight: bold; margin: 2px 0 4px 0;">
                        ${info.weightText}
                    </span>
                    <p style="margin: 0; font-size: 12px; color: var(--text-muted); line-height: 1.3;">
                        ${info.ref}
                    </p>
                </div>
                <div style="display: flex; align-items: center; gap: 8px; background: rgba(79,70,229,0.08); padding: 6px 10px; border-radius: 24px; flex-shrink: 0;">
                    <button class="step-btn step-minus" data-group="${key}" style="border:none; background:var(--primary-color); color:white; font-size: 16px; cursor: pointer; width: 28px; height: 28px; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-weight: bold; line-height: 1;">−</button>
                    <span class="step-val" id="val-${key}" style="font-weight: bold; font-size: 18px; width: 24px; text-align: center; color: var(--text-main);">${currentVal}</span>
                    <button class="step-btn step-plus" data-group="${key}" style="border:none; background:var(--primary-color); color:white; font-size: 16px; cursor: pointer; width: 28px; height: 28px; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-weight: bold; line-height: 1;">+</button>
                </div>
            </div>
        `;
    });

    mainContent.innerHTML = `
        <h2>${t('portions_tab')}</h2>
        <p class="text-muted" style="margin-bottom: 16px;">${t('guide_desc')}</p>
        ${cardsHtml}
    `;

    // Interactive Steppers with auto-save
    document.querySelectorAll('.step-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const g = btn.dataset.group;
            todayPortions[g] = (todayPortions[g] || 0) + 1;
            document.getElementById(`val-${g}`).innerText = todayPortions[g];
            saveTodayPortions();
        });
    });
    document.querySelectorAll('.step-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const g = btn.dataset.group;
            if ((todayPortions[g] || 0) > 0) {
                todayPortions[g]--;
                document.getElementById(`val-${g}`).innerText = todayPortions[g];
                saveTodayPortions();
            }
        });
    });
}

window.registerMealPortions = (portionBreakdown) => {
    const todayKey = new Date().toISOString().slice(0, 10);
    let todayPortions = JSON.parse(localStorage.getItem('aesan_today_portions') || '{}');
    if (todayPortions._date !== todayKey) todayPortions = { _date: todayKey };

    // Update today's totals
    Object.entries(portionBreakdown).forEach(([group, value]) => {
        todayPortions[group] = (todayPortions[group] || 0) + parseFloat(value);
    });

    // Save and sync
    localStorage.setItem('aesan_today_portions', JSON.stringify(todayPortions));
    
    // Sync to history
    const todayEntry = userHistory.find(e => e.timestamp && e.timestamp.startsWith(todayKey));
    const portionsCopy = { ...todayPortions };
    delete portionsCopy._date;
    if (todayEntry) {
        todayEntry.portions = portionsCopy;
    } else {
        userHistory.push({ timestamp: new Date().toISOString(), portions: portionsCopy });
    }
    localStorage.setItem('aesan_history', JSON.stringify(userHistory));

    window.showCustomModal('✅ ' + t('portions_saved'), t('profile_saved_msg'));
    
    // Refresh if we are in the portions view, or just stay put
    if (currentView === 'portions') renderPortions();
};

function renderProfile() {
    const p = userProfile || { sports: {} };
    
    // Safety check function for template logic
    const safeStr = (val) => val ? val : '';
    const isSelected = (val, match) => val === match ? 'selected' : '';

    mainContent.innerHTML = `
        <h2>${t('your_profile')}</h2>
        <p class="text-muted" style="margin-bottom: 20px;">${t('profile_desc')}</p>
        
        <form id="profile-form" class="glass-card">
            <label>${t('name_label')}</label>
            <input type="text" id="p-name" value="${safeStr(p.name)}" required>
            
            <div style="display: flex; gap: 10px;">
                <div style="flex: 1">
                    <label>${t('age_label')}</label>
                    <input type="number" id="p-age" value="${safeStr(p.age)}" required>
                </div>
                <div style="flex: 1">
                    <label>${t('gender_label')}</label>
                    <select id="p-gender" required>
                        <option value="M" ${isSelected(p.gender, 'M')}>${t('male')}</option>
                        <option value="F" ${isSelected(p.gender, 'F')}>${t('female')}</option>
                    </select>
                </div>
            </div>

            <div style="display: flex; gap: 10px;">
                <div style="flex: 1">
                    <label>${t('weight_label')}</label>
                    <input type="number" id="p-weight" step="0.1" value="${safeStr(p.weight)}" required>
                </div>
                <div style="flex: 1">
                    <label>${t('height_label')}</label>
                    <input type="number" id="p-height" value="${safeStr(p.height)}" required>
                </div>
            </div>

            <div style="display: flex; gap: 10px;">
                <div style="flex: 1">
                    <label>${t('activity_label')}</label>
                    <select id="p-activity">
                        <option value="A" ${isSelected(p.activityLevel, 'A')}>${t('sedentary')}</option>
                        <option value="B" ${isSelected(p.activityLevel, 'B')}>${t('light_active')}</option>
                        <option value="C" ${isSelected(p.activityLevel, 'C')}>${t('mod_active')}</option>
                        <option value="D" ${isSelected(p.activityLevel, 'D')}>${t('very_active')}</option>
                        <option value="E" ${isSelected(p.activityLevel, 'E')}>${t('ext_active')}</option>
                    </select>
                </div>
                <div style="flex: 1">
                    <label>${t('lang_label')}</label>
                    <select id="p-language">
                        <option value="es" ${isSelected(p.language, 'es')}>Español</option>
                        <option value="en" ${isSelected(p.language, 'en')}>English</option>
                    </select>
                </div>
            </div>
            
            <h4 style="margin-top: 20px; margin-bottom: 10px;">${t('sports_title')}</h4>
            <div style="display: flex; gap: 10px;">
                <div style="flex: 1">
                    <label style="font-size: 12px;">${t('strength')}</label>
                    <input type="number" id="p-strength" value="${p.sports?.strength || 0}" min="0">
                </div>
                <div style="flex: 1">
                    <label style="font-size: 12px;">${t('endurance')}</label>
                    <input type="number" id="p-endurance" value="${p.sports?.endurance || 0}" min="0">
                </div>
                <div style="flex: 1">
                    <label style="font-size: 12px;">${t('team')}</label>
                    <input type="number" id="p-intermittent" value="${p.sports?.intermittent || 0}" min="0">
                </div>
            </div>

            <button type="submit" class="btn-primary" style="margin-top: 10px;">${t('save_profile')}</button>
        </form>
        <div class="glass-card" style="margin-top: 24px; border: 1px solid var(--primary-color);">
            <h3 style="margin-top: 0; display:flex; align-items:center; gap:8px;">
                ${t('ai_settings')} <span id="ai-status-icon" style="font-size: 16px;">${localStorage.getItem('aesan_gemini_key') ? '✅' : '⚪'}</span>
            </h3>
            <p class="text-muted" style="margin-bottom: 12px; font-size: 13px; line-height: 1.4;">
                ${t('ai_desc')}<br>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" style="color:var(--primary-color); text-decoration: underline;">${t('ai_link')}</a>.
            </p>
            <div style="margin-bottom: 12px;">
                <input type="password" id="gemini-api-key" class="input-field" placeholder="${t('ai_placeholder')}" value="${localStorage.getItem('aesan_gemini_key') || ''}">
            </div>
            <button id="btn-save-ai" class="btn-primary" onclick="window.saveApiKey()" style="width: 100%; padding: 10px; background: var(--secondary-color);">${t('ai_save_btn')}</button>
        </div>

        <button id="btn-clear" style="margin-top: 20px; width: 100%; border: none; background: none; color: red; font-weight: bold; cursor: pointer;">
            ${t('clear_all')}
        </button>
    `;

    window.saveApiKey = async () => {
        const key = document.getElementById('gemini-api-key').value.trim();
        const btn = document.getElementById('btn-save-ai');
        const icon = document.getElementById('ai-status-icon');
        
        if (key) {
            btn.innerText = t('ai_verifying');
            btn.style.opacity = "0.7";
            icon.innerText = "⏳";
            
            // Try multiple models in order of preference
            const modelsToTry = ['gemini-2.5-flash', 'gemini-2.5-flash-lite', 'gemini-2.0-flash'];
            let success = false;
            let lastError = '';
            
            for (const model of modelsToTry) {
                try {
                    console.log(`[AI] Trying model: ${model}`);
                    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ contents: [{ parts: [{ text: "Say OK" }] }] })
                    });
                    
                    if (response.ok) {
                        // Store the working model name for future use
                        localStorage.setItem('aesan_gemini_key', key);
                        localStorage.setItem('aesan_gemini_model', model);
                        icon.innerText = "✅";
                        window.showCustomModal(t('ai_success_title'), t('ai_success_msg') + ` (Model: ${model})`);
                        success = true;
                        break;
                    } else {
                        const errorData = await response.json().catch(() => ({}));
                        const errorMsg = errorData?.error?.message || `HTTP ${response.status}`;
                        console.warn(`[AI] Model ${model} failed: ${errorMsg}`);
                        lastError = errorMsg;
                        // Only continue trying other models if it's a model-specific error
                        if (response.status === 400 && errorMsg.includes('API_KEY')) {
                            // Bad API key - no point trying other models
                            break;
                        }
                    }
                } catch(e) {
                    console.error(`[AI] Network error for ${model}:`, e);
                    lastError = e.message;
                }
            }
            
            if (!success) {
                icon.innerText = "❌";
                localStorage.removeItem('aesan_gemini_key');
                localStorage.removeItem('aesan_gemini_model');
                // Show the actual error from Google
                const detailMsg = lastError ? `\n\nDetalle: ${lastError}` : '';
                window.showCustomModal(t('ai_error_title'), t('ai_error_msg') + detailMsg);
            }
            
            btn.innerText = t('ai_save_btn');
            btn.style.opacity = "1";
        } else {
            localStorage.removeItem('aesan_gemini_key');
            localStorage.removeItem('aesan_gemini_model');
            icon.innerText = "⚪";
            window.showCustomModal(t('ai_removed_title'), t('ai_removed_msg'));
        }
    };

    document.getElementById('profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const gender = document.getElementById('p-gender').value;
        if (gender === 'F') {
            const warn = confirm(t('pregnant_warn'));
            if (!warn) return;
        }

        userProfile = {
            name: document.getElementById('p-name').value,
            age: parseInt(document.getElementById('p-age').value),
            weight: parseFloat(document.getElementById('p-weight').value),
            height: parseInt(document.getElementById('p-height').value),
            gender: gender,
            activityLevel: document.getElementById('p-activity').value,
            language: document.getElementById('p-language').value,
            sports: {
                strength: parseInt(document.getElementById('p-strength').value) || 0,
                endurance: parseInt(document.getElementById('p-endurance').value) || 0,
                intermittent: parseInt(document.getElementById('p-intermittent').value) || 0
            }
        };
        
        localStorage.setItem('aesan_profile', JSON.stringify(userProfile));
        window.showCustomModal(t('profile_saved_title'), t('profile_saved_msg'));
        
        // Go home to see new targets
        renderView('home'); 
    });

    document.getElementById('btn-clear').addEventListener('click', () => {
        if(confirm(t('clear_confirm'))) {
            localStorage.clear();
            userHistory = [];
            userProfile = null;
            renderView('profile');
        }
    });
}

function logMeal(mealId) {
    const meal = mealsDatabase.find(m => m.id === mealId);
    if (!meal) return;

    userHistory.push({
        timestamp: new Date().toISOString(),
        meal: meal
    });
    localStorage.setItem('aesan_history', JSON.stringify(userHistory));
    
    alert(`¡Añadido: ${meal.name}! 🎉`);
    
    if (currentView === 'home') renderHome();
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        renderView(btn.dataset.view);
    });
});

// Force profile if no profile exists, otherwise boot to home
if (userProfile) {
    renderView('home');
} else {
    renderView('profile');
}
