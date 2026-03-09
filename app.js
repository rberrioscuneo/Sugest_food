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
        sug_tab: 'Sugerencias', prog_tab: 'Progreso', prof_tab: 'Opciones',
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
        // Products (OFF API)
        prod_title: 'Buscador de Productos',
        prod_desc: 'Busca un producto por su nombre para ver su tabla de macros y registrar su consumo.',
        prod_search_ph: 'Ej. Leche entera, Avena...',
        prod_btn: 'Buscar',
        prod_logging: 'Registrar',
        prod_timeline: 'Diario de Consumo',
        prod_empty: 'Aún no has registrado productos directos hoy.',
        prod_cal: 'kcal / 100g',
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
        sug_tab: 'Suggestions', prog_tab: 'Progress', prof_tab: 'Options',
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
        lang_toggle: 'Change to Spanish',
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

window.closeModal = function() {
    const existing = document.getElementById('custom-modal');
    if (existing) existing.remove();
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

// Toast notification (slides down from top, auto-dismiss)
window.showToast = function(message, durationMs = 5000) {
    const existing = document.getElementById('toast-notification');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed', top: '-80px', left: '50%', transform: 'translateX(-50%)',
        background: 'var(--secondary-color)', color: 'white', padding: '14px 28px',
        borderRadius: '14px', fontSize: '14px', fontWeight: '600', zIndex: '99999',
        boxShadow: '0 8px 24px rgba(16,185,129,0.35)', transition: 'top 0.4s cubic-bezier(0.34,1.56,0.64,1)',
        maxWidth: '90vw', textAlign: 'center', fontFamily: 'inherit'
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => { toast.style.top = '24px'; });
    setTimeout(() => {
        toast.style.top = '-80px';
        setTimeout(() => toast.remove(), 400);
    }, durationMs);
};

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
 * Realiza una búsqueda híbrida: primero en la base de datos local y, si no hay resultados, en Open Food Facts.
 * Retorna un array de resultados.
 */
async function searchProducts(searchQuery) {
    if (!searchQuery) return [];
    const queryLower = searchQuery.toLowerCase();
    
    // 1. Búsqueda Local (Instantánea, O(N))
    let results = [];
    if (typeof localProductsDB !== 'undefined') {
        results = localProductsDB.filter(p => p.name.toLowerCase().includes(queryLower));
    }
    
    if (results.length > 0) {
        return results.slice(0, 50); // Limitar a los 50 mejores resultados locales para mostrar variaciones
    }

    // 2. Fallback a OFF API
    try {
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(searchQuery)}&json=1&page_size=5`;
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`Error HTTP OFF API: ${response.status}`);
        }
        
        const data = await response.json();
        if (data.products && data.products.length > 0) {
            return data.products.map(p => {
                const n = p.nutriments || {};
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
                        // Minerals
                        calcium_mg: (Number(n.calcium_100g) * 1000) || 0,
                        iron_mg: (Number(n.iron_100g) * 1000) || 0,
                        magnesium_mg: (Number(n.magnesium_100g) * 1000) || 0,
                        zinc_mg: (Number(n.zinc_100g) * 1000) || 0,
                        potassium_mg: (Number(n.potassium_100g) * 1000) || 0,
                        selenium_ug: (Number(n.selenium_100g) * 1000000) || 0,
                        iodine_ug: (Number(n.iodine_100g) * 1000000) || 0,
                        // Vitamins
                        vit_a_ug: (Number(n['vitamin-a_100g']) * 1000000) || 0,
                        vit_d_ug: (Number(n['vitamin-d_100g']) * 1000000) || 0,
                        vit_e_mg: (Number(n['vitamin-e_100g']) * 1000) || 0,
                        vit_k_ug: (Number(n['vitamin-k_100g']) * 1000000) || 0,
                        vit_c_mg: (Number(n['vitamin-c_100g']) * 1000) || 0,
                        vit_b1_mg: (Number(n['vitamin-b1_100g']) * 1000) || 0,
                        vit_b2_mg: (Number(n['vitamin-b2_100g']) * 1000) || 0,
                        vit_b3_mg: (Number(n['vitamin-pp_100g']) * 1000) || 0,
                        vit_b6_mg: (Number(n['vitamin-b6_100g']) * 1000) || 0,
                        vit_b9_ug: (Number(n['vitamin-b9_100g']) * 1000000) || 0,
                        vit_b12_ug: (Number(n['vitamin-b12_100g']) * 1000000) || 0
                    }
                };
            });
        }
        return [];
    } catch (error) {
        console.error(`[OFF API] Error al buscar '${searchQuery}':`, error);
        return [];
    }
}

// --- EFSA Dietary Reference Values (DRVs) ---
/**
 * Diccionario constante con Valores de Referencia Dietética (PRI = Population Reference Intake, UL = Tolerable Upper Intake Level)
 * extraídos de la EFSA para calcio, hierro y vitamina C.
 * Arquitectura: Organizar en una estructura inmutable estática (const) permite consultas en O(1) y rápida escalabilidad a nuevos nutrientes.
 */
const EFSA_DRV = {
    // Minerals
    calcium_mg: { adult_18_24: { pri: 1000 }, adult_over_25: { pri: 950 } },
    iron_mg: { men_over_18: { pri: 11 }, women_18_49: { pri: 16 }, women_over_50: { pri: 11 } },
    magnesium_mg: { men: { pri: 350 }, women: { pri: 300 } },
    zinc_mg: { men: { pri: 16.3 }, women: { pri: 12.7 } },
    potassium_mg: { all: { pri: 3500 } },
    selenium_ug: { all: { pri: 70 } },
    iodine_ug: { all: { pri: 150 } },
    // Vitamins
    vit_a_ug: { men: { pri: 750 }, women: { pri: 650 } },
    vit_d_ug: { all: { pri: 15 } },
    vit_e_mg: { men: { pri: 13 }, women: { pri: 11 } },
    vit_k_ug: { all: { pri: 70 } },
    vitamin_c_mg: { men: { pri: 110 }, women: { pri: 95 } },
    vit_b1_mg: { men: { pri: 1.2 }, women: { pri: 1.1 } },
    vit_b2_mg: { men: { pri: 1.6 }, women: { pri: 1.3 } },
    vit_b3_mg: { men: { pri: 16 }, women: { pri: 14 } },
    vit_b6_mg: { men: { pri: 1.5 }, women: { pri: 1.2 } },
    vit_b5_mg: { all: { pri: 5 } },
    vit_b9_ug: { all: { pri: 330 } },
    vit_b12_ug: { all: { pri: 4 } }
};

/**
 * Función pura que computa las necesidades de micronutrientes del usuario cruzando la data EFSA_DRV.
 */
const getUserMicronutrientNeeds = (profile) => {
    let needs = {
        calcium: EFSA_DRV.calcium_mg.adult_over_25,
        iron:    EFSA_DRV.iron_mg.men_over_18,
        magnesium: EFSA_DRV.magnesium_mg.men,
        zinc: EFSA_DRV.zinc_mg.men,
        potassium: EFSA_DRV.potassium_mg.all,
        selenium: EFSA_DRV.selenium_ug.all,
        iodine: EFSA_DRV.iodine_ug.all,
        vitA: EFSA_DRV.vit_a_ug.men,
        vitD: EFSA_DRV.vit_d_ug.all,
        vitE: EFSA_DRV.vit_e_mg.men,
        vitK: EFSA_DRV.vit_k_ug.all,
        vitaminC: EFSA_DRV.vitamin_c_mg.men,
        vitB1: EFSA_DRV.vit_b1_mg.men,
        vitB2: EFSA_DRV.vit_b2_mg.men,
        vitB3: EFSA_DRV.vit_b3_mg.men,
        vitB6: EFSA_DRV.vit_b6_mg.men,
        vitB5: EFSA_DRV.vit_b5_mg.all,
        vitB9: EFSA_DRV.vit_b9_ug.all,
        vitB12: EFSA_DRV.vit_b12_ug.all
    };
    
    if (!profile || !profile.age || !profile.gender) {
        return needs;
    }

    const age = parseInt(profile.age, 10);
    const isFemale = profile.gender === 'F';

    needs.calcium = (age >= 18 && age <= 24) ? EFSA_DRV.calcium_mg.adult_18_24 : EFSA_DRV.calcium_mg.adult_over_25;
    needs.vitB5 = EFSA_DRV.vit_b5_mg.all;

    if (isFemale) {
        needs.iron = (age >= 50) ? EFSA_DRV.iron_mg.women_over_50 : EFSA_DRV.iron_mg.women_18_49;
        needs.magnesium = EFSA_DRV.magnesium_mg.women;
        needs.zinc = EFSA_DRV.zinc_mg.women;
        needs.vitA = EFSA_DRV.vit_a_ug.women;
        needs.vitE = EFSA_DRV.vit_e_mg.women;
        needs.vitaminC = EFSA_DRV.vitamin_c_mg.women;
        needs.vitB1 = EFSA_DRV.vit_b1_mg.women;
        needs.vitB2 = EFSA_DRV.vit_b2_mg.women;
        needs.vitB3 = EFSA_DRV.vit_b3_mg.women;
        needs.vitB6 = EFSA_DRV.vit_b6_mg.women;
    }

    // --- Sport-Based Micronutrient Adjustments ---
    // Based on ISSN Position Stand (Kerksick et al. 2018), ACSM (Thomas et al. 2016)
    const sports = profile.sports || {};
    const sStr = parseInt(sports.strength) || 0;
    const sEnd = parseInt(sports.endurance) || 0;
    const sInt = parseInt(sports.intermittent) || 0;
    const isAthlete = sStr + sEnd + sInt >= 3; // ≥3 sessions/week
    const isStrength = sStr >= 2;
    const isEndurance = sEnd >= 2;

    if (isAthlete) {
        // All athletes: B-vitamins +20% (energy metabolism), VitC +25% (oxidative stress)
        needs.vitB1 = { pri: Math.round(needs.vitB1.pri * 1.2 * 10) / 10 };
        needs.vitB2 = { pri: Math.round(needs.vitB2.pri * 1.2 * 10) / 10 };
        needs.vitB3 = { pri: Math.round(needs.vitB3.pri * 1.2 * 10) / 10 };
        needs.vitB5 = { pri: Math.round(needs.vitB5.pri * 1.2 * 10) / 10 };
        needs.vitB6 = { pri: Math.round(needs.vitB6.pri * 1.2 * 10) / 10 };
        needs.vitaminC = { pri: Math.round(needs.vitaminC.pri * 1.25) };
        needs.vitE = { pri: Math.round(needs.vitE.pri * 1.2 * 10) / 10 };
    }
    if (isEndurance) {
        // Endurance: Iron +30% (foot-strike hemolysis, sweat loss - Peeling et al. 2008)
        needs.iron = { pri: Math.round(needs.iron.pri * 1.3 * 10) / 10 };
        // Magnesium +15% (muscle function - Nielsen & Lukaski 2006)
        needs.magnesium = { pri: Math.round(needs.magnesium.pri * 1.15) };
        // Potassium +10% (sweat electrolyte loss)
        needs.potassium = { pri: Math.round(needs.potassium.pri * 1.1) };
    }
    if (isStrength) {
        // Strength: Zinc +20% (testosterone synthesis, immune - Kilic 2007)
        needs.zinc = { pri: Math.round(needs.zinc.pri * 1.2 * 10) / 10 };
        // Magnesium +20% (muscle contraction, protein synthesis - Brilla & Haley 1992)
        needs.magnesium = { pri: Math.round((needs.magnesium.pri || 350) * 1.2) };
        // VitD +25% (muscle strength, bone density - Close et al. 2013)
        needs.vitD = { pri: Math.round(needs.vitD.pri * 1.25 * 10) / 10 };
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

async function generateAIMeals(groupsList, energy, gaps, customIngredients) {
    const apiKey = localStorage.getItem('aesan_gemini_key');
    if (!apiKey) return null;

    const groupsStr = groupsList.join(', ');
    
    // Add custom ingredients instruction if provided
    let customIngInstruction = "";
    if (customIngredients && customIngredients.trim() !== "") {
        customIngInstruction = `
El usuario ha mencionado que le gustaría inspirarse o incluir estos ingredientes específicos: "${customIngredients}".
OJO: INTENTA incluir ALGUNOS de ellos en las recetas para personalizarlas a sus gustos/nevera, pero NO es obligatorio usarlos absolutamente todos. Siempre prioriza el balance nutricional y los macros sobre el uso forzado de ingredientes que no combinen.`;
    }

    const prompt = `Actúa como un nutricionista experto en recomposición corporal deportiva. El usuario tiene disponibles los siguientes grupos base: "${groupsStr}". 
Invéntate 2 recomendaciones de comida saludables atractivas (1 comida, no el día entero).
${customIngInstruction}

Contexto METABÓLICO IMPORTANTE:
El usuario tiene un objetivo diario total de: ${energy.tdee} kcal, PRO: ${energy.proteinGrams}g, CHO: ${energy.carbsGrams}g, GRASAS: ${energy.fatsGrams}g.
Sin embargo, HOY le FALTAN EXACTAMENTE para cumplir su objetivo:
- Calorías restantes: ${Math.max(0, gaps.kcal)} kcal
- Proteínas restantes: ${Math.max(0, gaps.pro)} g
- Carbohidratos restantes: ${Math.max(0, gaps.cho)} g
- Grasas restantes: ${Math.max(0, gaps.fat)} g

INSTRUCCIÓN CRÍTICA: Debes diseñar estas 2 recetas específicamente para SALDAR ESTAS CARENCIAS sin pasarte significativamente. Las recetas deben cubrir aproximadamente el ${Math.max(20, Math.min(100, Math.round((gaps.kcal/energy.tdee)*100)))}% de su requerimiento total del día enfocado en los macros que le faltan (ej. si le faltan muchas proteínas pero 0 grasas, haz una comida altísima en proteína y bajísima en grasa). Nunca te pases mucho del objetivo restante.

Especifica pesos reales en gramos para cada ingrediente (ej. "150g pechuga de pollo").
Responde EXCLUSIVAMENTE con un arreglo (array) en formato JSON válido, sin markdown ni backticks, con esta estructura exacta para cada receta:
[
  {
    "name": "Nombre creativo de la receta",
    "groups": ["vegetable", "meat", "cereal"], // usa solo: vegetable, fruit, cereal, legume, meat, fish, dairy, egg, nut, oil
    "portionBreakdown": { "vegetable": 1, "meat": 1, "cereal": 1 }, // porciones estimadas (pueden ser decimales ej 0.5)
    "calories": 450,
    "macros": { "pro": 30, "cho": 45, "fat": 15 },
    "ingredients": ["150g pollo", "200g brócoli"],
    "instructions": "Instrucciones breves paso a paso orientadas a potenciar la nutrición."
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
    
    let todayMicros = {
        calcium: 0, iron: 0, magnesium: 0, zinc: 0, potassium: 0, selenium: 0, iodine: 0,
        vitA: 0, vitD: 0, vitE: 0, vitK: 0, vitaminC: 0, vitB1: 0, vitB2: 0, vitB3: 0, vitB5: 0, vitB6: 0, vitB9: 0, vitB12: 0
    };
    
    let todayMacroDetail = { 
        tdeeActual: 0, proteinActual: 0, carbsActual: 0, fatsActual: 0,
        fiber: 0, sugars: 0, sat: 0, mono: 0, poly: 0, omega3: 0, omega6: 0, epa: 0, dha: 0 
    };
    let todayAminos = { leucine: 0, isoleucine: 0, valine: 0, lysine: 0, methionine: 0, cysteine: 0, phenylalanine: 0, threonine: 0, tryptophan: 0, histidine: 0 };
    
    // Safely add micros helper
    const addMicros = (sourceMicros, multiplier = 1) => {
        if (!sourceMicros) return;
        todayMicros.calcium += (sourceMicros.calcium_mg || sourceMicros.calcium || 0) * multiplier;
        todayMicros.iron += (sourceMicros.iron_mg || sourceMicros.iron || 0) * multiplier;
        todayMicros.magnesium += (sourceMicros.magnesium_mg || sourceMicros.magnesium || 0) * multiplier;
        todayMicros.zinc += (sourceMicros.zinc_mg || sourceMicros.zinc || 0) * multiplier;
        todayMicros.potassium += (sourceMicros.potassium_mg || sourceMicros.potassium || 0) * multiplier;
        todayMicros.selenium += (sourceMicros.selenium_ug || sourceMicros.selenium || 0) * multiplier;
        todayMicros.iodine += (sourceMicros.iodine_ug || sourceMicros.iodine || 0) * multiplier;
        todayMicros.vitA += (sourceMicros.vit_a_ug || sourceMicros.vitA || 0) * multiplier;
        todayMicros.vitD += (sourceMicros.vit_d_ug || sourceMicros.vitD || 0) * multiplier;
        todayMicros.vitE += (sourceMicros.vit_e_mg || sourceMicros.vitE || 0) * multiplier;
        todayMicros.vitK += (sourceMicros.vit_k_ug || sourceMicros.vitK || 0) * multiplier;
        todayMicros.vitaminC += (sourceMicros.vitamin_c_mg || sourceMicros.vC || sourceMicros.vitaminC || 0) * multiplier;
        todayMicros.vitB1 += (sourceMicros.vit_b1_mg || sourceMicros.vitB1 || 0) * multiplier;
        todayMicros.vitB2 += (sourceMicros.vit_b2_mg || sourceMicros.vitB2 || 0) * multiplier;
        todayMicros.vitB3 += (sourceMicros.vit_b3_mg || sourceMicros.vitB3 || 0) * multiplier;
        todayMicros.vitB5 += (sourceMicros.vit_b5_mg || sourceMicros.vitB5 || 0) * multiplier;
        todayMicros.vitB6 += (sourceMicros.vit_b6_mg || sourceMicros.vitB6 || 0) * multiplier;
        todayMicros.vitB9 += (sourceMicros.vit_b9_ug || sourceMicros.vitB9 || 0) * multiplier;
        todayMicros.vitB12 += (sourceMicros.vit_b12_ug || sourceMicros.vitB12 || 0) * multiplier;
    };
    
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

        if (entry.product) {
            // Direct product logging (V13/V14/V15 OFF & Local DB)
            if (isToday) {
                const amountFactor = entry.product.amount_g ? (entry.product.amount_g / 100) : 1;
                addMicros(entry.product.micros, amountFactor);
                // Expanded macros
                const m = entry.product.macros || {};
                todayMacroDetail.tdeeActual += (entry.product.calories || 0) * amountFactor;
                todayMacroDetail.proteinActual += (m.pro || 0) * amountFactor;
                todayMacroDetail.carbsActual += (m.cho || 0) * amountFactor;
                todayMacroDetail.fatsActual += (m.fat || 0) * amountFactor;
                todayMacroDetail.fiber += (m.fiber || 0) * amountFactor;
                todayMacroDetail.sugars += (m.sugars || 0) * amountFactor;
                todayMacroDetail.sat += (m.sat || 0) * amountFactor;
                todayMacroDetail.mono += (m.mono || 0) * amountFactor;
                todayMacroDetail.poly += (m.poly || 0) * amountFactor;
                todayMacroDetail.omega3 += (m.omega3 || 0) * amountFactor;
                todayMacroDetail.omega6 += (m.omega6 || 0) * amountFactor;
                todayMacroDetail.epa += (m.epa || 0) * amountFactor;
                todayMacroDetail.dha += (m.dha || 0) * amountFactor;
                // Amino acids
                const a = entry.product.aminos || {};
                Object.keys(todayAminos).forEach(k => { todayAminos[k] += (a[k] || 0) * amountFactor; });
            }
        } else if (entry.meal) {
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
                        addMicros(PORTIONS_GUIDE[group]?.micros, 1);
                        todayHits[group] += 1;
                    }
                    if (isThisWeek) weekHits[group] += 1;
                }
            });
        } else if (entry.portions) {
            // Legacy V3 format logging grouped daily portions
            Object.keys(entry.portions).forEach(group => {
                const qty = parseFloat(entry.portions[group]) || 0;
                if (CORE_GUIDELINES[group]) {
                    if (isToday) {
                        todayHits[group] += qty;
                        addMicros(PORTIONS_GUIDE[group]?.micros, qty);
                    }
                    if (isThisWeek) weekHits[group] += qty;
                }
            });
        } else if (entry.portion) {
            // New V4 format logging timed specific portions
            const group = entry.portion.group;
            const qty = entry.portion.qty || 1;
            if (CORE_GUIDELINES[group]) {
                if (isToday) {
                    todayHits[group] += qty;
                    addMicros(PORTIONS_GUIDE[group]?.micros, qty);
                }
                if (isThisWeek) weekHits[group] += qty;
            }
        }
    });

    return { todayHits, weekHits, todayMicros, todayMacroDetail, todayAminos };
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
let currentRegistroMode = 'timeline'; // State for Registro tab: timeline, portions, products

function renderView(viewName) {
    const mainContent = document.getElementById('main-content');
    const navButtons = document.querySelectorAll('.nav-btn');
    
    if (!mainContent) return; // Wait for DOM

    currentView = viewName;
    updateNavButtons(viewName);
    
    // Update bottom nav labels based on language
    const lnProg = document.getElementById('nav-progreso'); if(lnProg) lnProg.innerText = t('prog_tab');
    const lnSug = document.getElementById('nav-sugerencias'); if(lnSug) lnSug.innerText = t('sug_tab');
    const lnReg = document.getElementById('nav-registro'); if(lnReg) lnReg.innerText = 'Registro';
    const lnProf = document.getElementById('nav-perfil'); if(lnProf) lnProf.innerText = t('prof_tab');

    // Force user to profile if first time
    const isProfileView = viewName === 'profile' || viewName === 'options';
    if (!userProfile && !isProfileView) {
        if (window.showToast) {
            window.showToast(t('first_time'), 5000);
        }
        updateNavButtons('options'); // Keep nav highlighted on options
        return; // Don't proceed to update currentView or render anything else
    }
    
    switch(viewName) {
        case 'home':
            renderHome();
            break;
        case 'suggestions':
            renderSuggestions();
            break;
        case 'profile':
        case 'options':
            renderOptions();
            break;
        case 'registro':
            renderRegistro();
            break;
    }
}

function updateNavButtons(activeView) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        if (btn.dataset.view === activeView) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- View: Registro (Combined Portions & Products) ---
window.changeRegistroMode = function(mode) {
    currentRegistroMode = mode;
    const body = document.getElementById('registro-body');
    if (body) {
        if (mode === 'portions') {
            renderPortions();
        } else {
            renderProducts();
        }
    }
};

function renderRegistro() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    mainContent.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h2 style="margin: 0;">Registro</h2>
            <div style="display: flex; gap: 8px; align-items: center;">
                <select onchange="window.changeRegistroMode(this.value)" style="padding: 6px 12px; border-radius: 8px; border: 1px solid var(--primary-color); background: var(--card-bg); color: var(--text-color); font-size: 14px; outline: none; cursor: pointer;">
                    <option value="timeline" ${currentRegistroMode === 'timeline' ? 'selected' : ''}>Diario</option>
                    <option value="portions" ${currentRegistroMode === 'portions' ? 'selected' : ''}>Por porciones</option>
                    <option value="products" ${currentRegistroMode === 'products' ? 'selected' : ''}>Por alimentos</option>
                </select>
                <button onclick="window.openUnifiedAddLogModal()" style="width: 36px; height: 36px; border-radius: 50%; background: var(--primary-color); color: white; border: none; font-size: 20px; font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px rgba(0,0,0,0.1); padding: 0;">
                    +
                </button>
            </div>
        </div>
        <div id="registro-body"></div>
    `;

    if (currentRegistroMode === 'timeline') {
        renderTimelineView();
    } else if (currentRegistroMode === 'portions') {
        renderPortions();
    } else {
        renderProducts();
    }
}

window._unifiedLogTime = null;

window.openUnifiedAddLogModal = () => {
    const defaultTime = new Date().toTimeString().slice(0, 5);
    window.showCustomModal('Añadir al Diario', `
        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 8px;">
            <div>
                <label style="font-size: 13px; font-weight: 600; color: var(--text-muted); margin-bottom: 4px; display: block;">Hora de consumo</label>
                <input type="time" id="unified-log-time" value="${defaultTime}" style="width: 100%; padding: 12px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1); font-size: 16px; background: var(--card-bg); color: var(--text-color); outline: none;">
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <button onclick="window.startLogPortionFlow()" style="padding: 14px; background: var(--card-bg); color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 12px; display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;">
                    <span style="font-size: 24px;">🍎</span>
                    <span style="font-size: 14px; font-weight: 600;">Porción</span>
                </button>
                <button onclick="window.startLogProductFlow()" style="padding: 14px; background: var(--card-bg); color: var(--primary-color); border: 2px solid var(--primary-color); border-radius: 12px; display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;">
                    <span style="font-size: 24px;">🔍</span>
                    <span style="font-size: 14px; font-weight: 600;">Alimento</span>
                </button>
            </div>
        </div>
    `);
};

window.startLogPortionFlow = () => {
    window._unifiedLogTime = document.getElementById('unified-log-time').value;
    closeModal();
    let gridHtml = '<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 12px;">';
    Object.keys(PORTIONS_GUIDE).forEach(key => {
        gridHtml += `<div onclick="window.openPortionSelector('${key}')" style="background: var(--card-bg); border: 1px solid rgba(0,0,0,0.05); border-radius: 12px; padding: 12px 0; text-align: center; font-size: 28px; cursor: pointer;">${PORTIONS_GUIDE[key].icon}</div>`
    });
    gridHtml += '</div>';
    window.showCustomModal(`Elige un grupo (${window._unifiedLogTime})`, gridHtml);
};

window.startLogProductFlow = () => {
    window._unifiedLogTime = document.getElementById('unified-log-time').value;
    closeModal();
    window.changeRegistroMode('products');
};

function renderTimelineView() {
    const container = document.getElementById('registro-body');
    if (!container) return;

    const now = new Date();
    const todaysEntries = userHistory.filter(entry => {
        if (!entry.product && !entry.portion) return false;
        return new Date(entry.timestamp).toDateString() === now.toDateString();
    });

    todaysEntries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Newest first

    if (todaysEntries.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 40px 20px;">
            <div style="font-size: 48px; margin-bottom: 16px;">📝</div>
            <p>Aún no has registrado nada hoy.</p>
            <p style="font-size: 14px;">Toca el botón <b>+</b> arriba a la derecha para empezar.</p>
        </div>`;
        return;
    }

    let totalCal = 0;
    let tlItems = '';

    todaysEntries.forEach(entry => {
        const timeStr = new Date(entry.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        if (entry.product) {
            const g = entry.product.amount_g || 100;
            const cal = Math.round(entry.product.calories * g / 100);
            totalCal += cal;
            const displayMeasure = entry.product.measure_text || `${g}g`;
            tlItems += `
                <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.04);">
                    <div style="font-size: 24px; min-width: 36px; text-align: center;">${entry.product.image ? '' : '📦'}</div>
                    ${entry.product.image ? `<img src="${entry.product.image}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 6px;">` : ''}
                    <div style="flex: 1; min-width: 0;">
                        <div style="font-size: 14px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${entry.product.name}</div>
                        <div style="font-size: 12px; color: var(--text-muted);">${displayMeasure} · ${timeStr}</div>
                    </div>
                    <div style="font-size: 14px; font-weight: 700; color: var(--primary-color); white-space: nowrap;">${cal} kcal</div>
                </div>`;
        } else if (entry.portion) {
            const info = PORTIONS_GUIDE[entry.portion.group];
            const optionLabel = info.options[entry.portion.optionIndex] ? info.options[entry.portion.optionIndex].name : 'Genérico';
            tlItems += `
                <div style="display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid rgba(0,0,0,0.04);">
                    <div style="font-size: 28px; min-width: 36px; text-align: center;">${info.icon}</div>
                    <div style="flex: 1; min-width: 0;">
                        <div style="font-size: 14px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${t(entry.portion.group)} (${optionLabel})</div>
                        <div style="font-size: 12px; color: var(--text-muted);">1 Porción · ${timeStr}</div>
                    </div>
                </div>`;
        }
    });

    container.innerHTML = `
        <div class="glass-card" style="padding: 16px; margin-bottom: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <h3 style="margin: 0; font-size: 16px;">Historial del Día</h3>
                <span style="font-size: 14px; font-weight: 700; color: var(--primary-color);">${totalCal} kcal</span>
            </div>
            ${tlItems}
        </div>
    `;
}


// --- View: Products (OFF Search) ---
let lastSearchResults = [];

function renderProducts() {
    const container = document.getElementById('registro-body') || document.getElementById('main-content');
    if (!container) return;

    // --- Search results list (MacroFactor style grouping) ---
    let searchResultHtml = '';
    if (lastSearchResults && lastSearchResults.length > 0) {
        
        // 1. Group results by base name
        const groupedResults = {};
        lastSearchResults.forEach((res, index) => {
            // e.g. "Pollo Pechuga Sin piel (Frito)" -> match[1]="Pollo Pechuga Sin piel", match[2]="Frito"
            const match = res.name.match(/^(.*?)\s*(\((.*?)\))?$/);
            let baseName = match && match[1] ? match[1].trim() : res.name;
            let variation = match && match[3] ? match[3].trim() : "Estándar";
            
            if (!groupedResults[baseName]) {
                groupedResults[baseName] = { items: [], baseImg: res.image || '📦' };
            }
            groupedResults[baseName].items.push({ OriginalIndex: index, item: res, variantName: variation });
        });

        // 2. Render groups
        let listItems = '';
        Object.keys(groupedResults).forEach((groupName, groupIndex) => {
            const group = groupedResults[groupName];
            
            // Render the Parent Row
            listItems += `
                <div id="sr-group-${groupIndex}" onclick="window.expandGroup(${groupIndex})" class="search-parent-row" style="display: flex; align-items: center; gap: 12px; padding: 12px 10px; border-bottom: 1px solid rgba(0,0,0,0.04); cursor: pointer; transition: background 0.15s; border-radius: 8px; flex-wrap: wrap;">
                    <div style="font-size: 22px; width: 36px; text-align: center; flex-shrink: 0;">
                        ${group.baseImg !== '📦' ? `<img src="${group.baseImg}" style="width: 36px; height: 36px; object-fit: cover; border-radius: 6px;">` : '📦'}
                    </div>
                    <div style="flex: 1; min-width: 0;">
                        <div style="font-size: 15px; font-weight: 700; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--text-main);">${groupName}</div>
                        <div style="font-size: 11px; color: var(--text-muted);">${group.items.length} variaciones</div>
                    </div>
                    <div style="color: var(--primary-color); font-size: 18px; flex-shrink: 0; transition: transform 0.2s;" id="sr-group-icon-${groupIndex}">▾</div>
                </div>
                
                <div id="sr-group-variations-${groupIndex}" class="variations-container" style="display: none; padding-left: 12px; margin-bottom: 4px;">`;
                
            // Render Children Rows (Variations)
            group.items.forEach((variant) => {
                const globalIndex = variant.OriginalIndex;
                const vItem = variant.item;
                listItems += `
                    <div id="sr-row-${globalIndex}" onclick="window.expandResult(${globalIndex})" class="search-child-row" style="display: flex; align-items: center; gap: 10px; padding: 10px 8px 10px 32px; border-bottom: 1px solid rgba(0,0,0,0.02); cursor: pointer; position: relative;">
                        <!-- L-Bracket connector -->
                        <div style="position: absolute; left: 16px; top: -10px; bottom: 50%; width: 10px; border-left: 2px solid var(--glass-border); border-bottom: 2px solid var(--glass-border); border-bottom-left-radius: 4px;"></div>
                        
                        <div style="flex: 1; min-width: 0;">
                            <div style="font-size: 13px; font-weight: 500; color: var(--text-main);"><span class="variation-badge">Prep:</span> ${variant.variantName}</div>
                        </div>
                        <div style="text-align: right; flex-shrink: 0;">
                            <div style="font-size: 13px; font-weight: 700; color: var(--text-main);">${Math.round(vItem.calories)}</div>
                            <div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase;">kcal / 100g</div>
                        </div>
                    </div>
                    
                    <!-- Detail expanding box for this specific variant -->
                    <div id="sr-detail-${globalIndex}" style="display: none; padding-left: 20px;"></div>
                `;
            });
            
            listItems += `</div>`; // Close variations container
        });

        searchResultHtml = `
            <div class="glass-card" style="padding: 4px 12px; margin-top: 12px;">
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: var(--text-muted); padding: 10px 4px 4px 4px; font-weight: 600;">Resultados (${lastSearchResults.length})</div>
                ${listItems}
            </div>`;
    }

    let html = `
        <div style="margin-bottom: 16px;">
            <h2 style="margin-bottom: 4px;">Registro</h2>
            <p style="color: var(--text-muted); font-size: 13px; margin: 0;">Busca y registra lo que comes</p>
        </div>
        
        <div style="position: sticky; top: 0; z-index: 50; padding: 8px 0; background: var(--bg-gradient);">
            <div style="position: relative;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); pointer-events: none;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <input type="text" id="off-search-input" class="search-input" placeholder="${t('prod_search_ph')}" 
                    onkeydown="if(event.key==='Enter') handleOFFSearch()" 
                    style="width: 100%; padding: 14px 14px 14px 42px; border-radius: 14px; font-size: 16px; font-family: inherit; margin: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
            </div>
        </div>

        <div id="off-loading-state" style="display: none; text-align: center; padding: 30px; color: var(--primary-light);">
            <span class="spinner" style="display: inline-block; width: 28px; height: 28px; border: 3px solid rgba(0,0,0,0.1); border-radius: 50%; border-top-color: var(--primary-color); animation: spin 1s ease-in-out infinite;"></span>
            <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
            <div style="margin-top: 10px; font-size: 14px; font-weight: 500;">Buscando...</div>
        </div>

        <div id="off-search-result-container">
            ${searchResultHtml}
        </div>

        ${timelineHtml}

        ${todaysProducts.length === 0 && (!lastSearchResults || lastSearchResults.length === 0) ? `
            <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                <div style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;">🍽️</div>
                <p style="font-size: 15px; font-weight: 500; margin-bottom: 4px;">Empieza a registrar</p>
                <p style="font-size: 13px;">Busca alimentos arriba para añadir a tu diario</p>
            </div>` : ''}
    `;

    container.innerHTML = html;

    // Expand Group accordion
    window.expandGroup = (groupIndex) => {
        const varContainer = document.getElementById(`sr-group-variations-${groupIndex}`);
        const icon = document.getElementById(`sr-group-icon-${groupIndex}`);
        if (!varContainer || !icon) return;
        
        if (varContainer.style.display === 'block') {
            varContainer.style.display = 'none';
            icon.style.transform = '';
        } else {
            // Collapse other groups optionally, or keep multiple open. Macrofactor keeps others open usually, but let's make it cleaner by opening one at a time.
            document.querySelectorAll('.variations-container').forEach(el => el.style.display = 'none');
            document.querySelectorAll('div[id^="sr-group-icon-"]').forEach(el => el.style.transform = '');
            
            varContainer.style.display = 'block';
            icon.style.transform = 'rotate(180deg)';
        }
    };

    // Expand specific Variation Macro details
    window.expandResult = (index) => {
        const detail = document.getElementById(`sr-detail-${index}`);
        if (!detail || !lastSearchResults[index]) return;

        // Collapse all others globally
        lastSearchResults.forEach((_, i) => {
            if (i !== index) {
                const other = document.getElementById(`sr-detail-${i}`);
                if (other) other.style.display = 'none';
            }
        });

        // Toggle this one
        if (detail.style.display === 'block') {
            detail.style.display = 'none';
            return;
        }

        const res = lastSearchResults[index];
        detail.innerHTML = `
            <div style="padding: 14px; background: rgba(99,102,241,0.06); border-radius: 12px; margin: 4px 0 16px 0; border: 1px solid rgba(99,102,241,0.15); animation: fadeIn 0.15s ease-out;">
                <div style="display: flex; justify-content: space-around; text-align: center; margin-bottom: 14px;">
                    <div><div style="font-size: 18px; font-weight: 800; color: var(--primary-color);" id="dyn-pro-${index}">${res.macros.pro.toFixed(1)}</div><div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Pro</div></div>
                    <div><div style="font-size: 18px; font-weight: 800; color: #f59e0b;" id="dyn-cho-${index}">${res.macros.cho.toFixed(1)}</div><div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">HC</div></div>
                    <div><div style="font-size: 18px; font-weight: 800; color: #ef4444;" id="dyn-fat-${index}">${res.macros.fat.toFixed(1)}</div><div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Grasa</div></div>
                    <div><div style="font-size: 18px; font-weight: 800;" id="dyn-cal-${index}">${Math.round(res.calories)}</div><div style="font-size: 9px; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">kcal</div></div>
                </div>
                
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px; background: var(--card-bg); padding: 6px 10px; border-radius: 8px; border: 1px solid var(--glass-border);">
                    <span style="font-size: 14px;">⚖️</span>
                    <input type="number" id="prod-weight-${index}" value="100" min="0.1" max="5000" step="any" 
                        oninput="window.updateDynMacros(${index})"
                        style="flex: 1; padding: 4px; text-align: center; font-size: 16px; font-weight: 700; margin: 0; border: none; outline: none; background: transparent; width: 60px;">
                    
                    <select id="prod-unit-${index}" onchange="window.handleUnitChange(${index})" style="margin: 0; padding: 4px 8px; border-radius: 6px; border: 1px solid var(--glass-border); background: var(--bg-color); font-size: 13px; font-weight: 600; color: var(--text-main); flex: 2; cursor: pointer; height: auto;">
                        <option value="1" data-name="Gramos">Gramos (g)</option>
                        ${(res.measures || []).map(m => `<option value="${m.grams}" data-name="${m.name}">${m.name} (${m.grams}g)</option>`).join('')}
                    </select>
                </div>

                <div style="display: flex; gap: 4px; margin-bottom: 12px;">
                    <button onclick="window.quickWeight(${index}, 100)" style="flex:1; padding: 6px; border: 1px solid var(--primary-color); border-radius: 6px; background: rgba(99,102,241,0.1); font-size: 12px; font-weight: 600; cursor: pointer; color: var(--primary-color);">100g</button>
                    <button onclick="window.quickWeight(${index}, 150)" style="flex:1; padding: 6px; border: 1px solid var(--glass-border); border-radius: 6px; background: var(--card-bg); font-size: 12px; font-weight: 600; cursor: pointer; color: var(--text-main);">150g</button>
                    <button onclick="window.quickWeight(${index}, 200)" style="flex:1; padding: 6px; border: 1px solid var(--glass-border); border-radius: 6px; background: var(--card-bg); font-size: 12px; font-weight: 600; cursor: pointer; color: var(--text-main);">200g</button>
                    <button onclick="window.quickWeight(${index}, 300)" style="flex:1; padding: 6px; border: 1px solid var(--glass-border); border-radius: 6px; background: var(--card-bg); font-size: 12px; font-weight: 600; cursor: pointer; color: var(--text-main);">300g</button>
                </div>

                <button onclick="logProduct(${index})" style="width: 100%; border-radius: 8px; border: none; background: var(--secondary-color); color: white; padding: 12px; font-size: 14px; font-weight: 700; cursor: pointer; box-shadow: 0 4px 12px rgba(16,185,129,0.3); display: flex; align-items: center; justify-content: center; gap: 6px;">
                    ✓ Registrar Porción
                </button>
            </div>`;
        detail.style.display = 'block';
    };

    // Handle unit dropdown change (switch from Grams to Large Breast, etc.)
    window.handleUnitChange = (index) => {
        const input = document.getElementById(`prod-weight-${index}`);
        const select = document.getElementById(`prod-unit-${index}`);
        if (!input || !select) return;
        
        // When switching units, default to 1 unit if it's a qualitative measure, 100 if grams
        if (select.value === "1") {
            input.value = 100;
        } else {
            input.value = 1;
        }
        window.updateDynMacros(index);
    };

    // Dynamic macro recalculation on weight change or unit change
    window.updateDynMacros = (index) => {
        const res = lastSearchResults[index];
        const input = document.getElementById(`prod-weight-${index}`);
        const select = document.getElementById(`prod-unit-${index}`);
        if (!res || !input || !select) return;
        
        const quantity = parseFloat(input.value) || 0;
        const unitGrams = parseFloat(select.value) || 1;
        
        const totalGrams = quantity * unitGrams;
        const f = totalGrams / 100;
        
        document.getElementById(`dyn-pro-${index}`).textContent = (res.macros.pro * f).toFixed(1);
        document.getElementById(`dyn-cho-${index}`).textContent = (res.macros.cho * f).toFixed(1);
        document.getElementById(`dyn-fat-${index}`).textContent = (res.macros.fat * f).toFixed(1);
        document.getElementById(`dyn-cal-${index}`).textContent = Math.round(res.calories * f);
    };

    // Quick weight presets
    window.quickWeight = (index, grams) => {
        const input = document.getElementById(`prod-weight-${index}`);
        const select = document.getElementById(`prod-unit-${index}`);
        if (input && select) { 
            // Force back to Grams mode for quick weights
            select.value = "1";
            input.value = grams; 
            window.updateDynMacros(index); 
        }
    };
}

// Handlers for Products View
async function handleOFFSearch() {
    const input = document.getElementById('off-search-input');
    const query = input.value.trim();
    if (!query) return;

    // Show loading
    document.getElementById('off-search-result-container').innerHTML = '';
    document.getElementById('off-loading-state').style.display = 'block';

    const results = await searchProducts(query);
    
    document.getElementById('off-loading-state').style.display = 'none';

    if (results && results.length > 0) {
        lastSearchResults = results;
    } else {
        lastSearchResults = [];
        document.getElementById('off-search-result-container').innerHTML = `<div style="color: var(--accent-color); font-size: 14px; padding: 16px; text-align: center; background: rgba(255,0,0,0.05); border-radius: 12px; margin-top: 16px;">No se encontró ningún producto. Inténtalo con sinónimos.</div>`;
        return;
    }
    
    // Re-render to show result
    renderProducts();
}

function logProduct(index) {
    if (!lastSearchResults || lastSearchResults.length <= index) return;

    const selectedProduct = lastSearchResults[index];
    const input = document.getElementById(`prod-weight-${index}`);
    const select = document.getElementById(`prod-unit-${index}`);
    
    const quantity = input ? (parseFloat(input.value) || 100) : 100;
    const unitGrams = select ? (parseFloat(select.value) || 1) : 1;
    const totalGrams = quantity * unitGrams;
    
    // Construct display text for the timeline
    let measureText = `${totalGrams}g`;
    if (select && select.value !== "1") {
        const unitName = select.options[select.selectedIndex].getAttribute('data-name');
        measureText = `${quantity}x ${unitName} (${totalGrams}g)`;
    }
    
    let d = new Date();
    if (window._unifiedLogTime) {
        const [hh, mm] = window._unifiedLogTime.split(':');
        d.setHours(parseInt(hh, 10), parseInt(mm, 10), 0, 0);
        window._unifiedLogTime = null; // Clear it for subsequent adds
    }
    
    const record = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
        timestamp: d.toISOString(),
        product: { ...selectedProduct, amount_g: totalGrams, measure_text: measureText }
    };
    
    userHistory.unshift(record);
    localStorage.setItem('aesan_history', JSON.stringify(userHistory));
    
    lastSearchResults = [];
    document.getElementById('off-search-input').value = '';
    window.showToast(`✅ ${selectedProduct.name} registrado`);
    renderProducts();
}

function renderHome() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

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
            <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
                <div style="min-width: 120px;">
                    <span style="font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 1px;">${t('daily_goal')}</span>
                    <div style="font-size: 28px; font-weight: 700; color: var(--primary-color)">${energy.tdee} <span style="font-size: 16px;">kcal</span></div>
                </div>
                <div style="text-align: right; margin-right: 16px; min-width: 100px;">
                    <div style="font-size: 13px;"><strong>PRO:</strong> ${energy.proteinGrams}g</div>
                    <div style="font-size: 13px;"><strong>CHO:</strong> ${energy.carbsGrams}g</div>
                    <div style="font-size: 13px;"><strong>AAGG:</strong> ${energy.fatsGrams}g</div>
                </div>
            </div>
        </div>
        
        <h3 style="margin-bottom: 12px;">${t('progress')}</h3>
        <div class="glass-card" style="padding: 16px 12px; margin-bottom: 24px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(90px, 1fr)); gap: 10px;">
                ${progressHtml}
            </div>
        </div>

        <!-- 1. Energía (Balance) -->
        <div class="glass-card" style="margin-bottom: 24px; padding: 16px 12px; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-size: 14px; font-weight: 600; margin-bottom: 4px;">Balance Energético 🔥</div>
            ${(() => {
                const md = state.todayMacroDetail;
                const percent = energy.tdee > 0 ? Math.min(100, (md.tdeeActual / energy.tdee) * 100) : 0;
                let barColor = 'var(--accent-color)';
                if (percent >= 80) barColor = 'var(--secondary-color)';
                return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>🔥 Energía (AR)</span><span>${md.tdeeActual.toFixed(1)} / ${energy.tdee} kcal <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
            })()}
        </div>

        <!-- 2. Proteínas y Aminoácidos -->
        <details class="glass-card" style="margin-bottom: 24px; cursor: pointer;">
            <summary style="padding: 14px 12px; outline: none; list-style: none;">
                <div style="font-size: 14px; font-weight: 600; margin-bottom: 12px; display: flex; justify-content: space-between;">
                    Proteínas y Aminoácidos 🥩 <span style="font-size: 12px; color: var(--primary-color);">▼ Expandir</span>
                </div>
                ${(() => {
                    const md = state.todayMacroDetail;
                    const percent = energy.proteinGrams > 0 ? Math.min(100, (md.proteinActual / energy.proteinGrams) * 100) : 0;
                    let barColor = 'var(--accent-color)';
                    if (percent >= 50) barColor = '#fbbf24';
                    if (percent >= 80) barColor = 'var(--secondary-color)';
                    return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>🥩 Proteínas Totales (PRI)</span><span>${md.proteinActual.toFixed(1)} / ${energy.proteinGrams} g <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                })()}
            </summary>
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 12px 14px 12px; border-top: 1px solid rgba(0,0,0,0.05); margin-top: 8px; padding-top: 16px;">
                ${(() => {
                    const am = state.todayAminos;
                    const w = (userProfile && userProfile.weight) ? parseFloat(userProfile.weight) : 70;
                    const sp = (userProfile && userProfile.sports) || {};
                    const sStr = parseInt(sp.strength) || 0;
                    const sEnd = parseInt(sp.endurance) || 0;
                    const sInt = parseInt(sp.intermittent) || 0;
                    
                    let aaMultiplier = 1.0;
                    if (sStr >= 2 && sEnd >= 2) aaMultiplier = 1.4;
                    else if (sStr >= 2) aaMultiplier = 1.3;
                    else if (sEnd >= 2) aaMultiplier = 1.2;
                    else if (sStr + sEnd + sInt >= 3) aaMultiplier = 1.15;

                    const eaaPRI = {
                        leucine:       Math.round(39 * w * aaMultiplier),
                        isoleucine:    Math.round(20 * w * aaMultiplier),
                        valine:        Math.round(26 * w * aaMultiplier),
                        lysine:        Math.round(30 * w * aaMultiplier),
                        methionine:    Math.round(15 * w * aaMultiplier),
                        cysteine:      Math.round(4 * w * aaMultiplier),
                        phenylalanine: Math.round(25 * w * aaMultiplier),
                        threonine:     Math.round(15 * w * aaMultiplier),
                        tryptophan:    Math.round(4 * w * aaMultiplier),
                        histidine:     Math.round(10 * w * aaMultiplier)
                    };

                    const sportLabel = aaMultiplier > 1 ? `(×${aaMultiplier} deportista)` : '(sedentario)';

                    const renderBarA = (label, currentVal, targetVal) => {
                        const val = currentVal || 0;
                        const tVal = targetVal || 1;
                        const percent = Math.min(100, (val / tVal) * 100);
                        let barColor = 'var(--accent-color)';
                        if (percent >= 50) barColor = '#fbbf24';
                        if (percent >= 80) barColor = 'var(--secondary-color)';
                        return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>${label}</span><span>${Math.round(val)} / ${tVal} mg <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                    };
                    return `
                        <div style="font-size: 12px; font-weight: bold; color: var(--primary-color); margin-bottom: -4px;">Aminoácidos Esenciales 🧬</div>
                        <p style="font-size:11px;color:var(--text-muted);margin-top:-2px;margin-bottom:8px;">Requisito ajustado a peso: ${w}kg ${sportLabel}</p>
                        ${renderBarA('Leucina', am.leucine, eaaPRI.leucine)}
                        ${renderBarA('Isoleucina', am.isoleucine, eaaPRI.isoleucine)}
                        ${renderBarA('Valina', am.valine, eaaPRI.valine)}
                        ${renderBarA('Lisina', am.lysine, eaaPRI.lysine)}
                        ${renderBarA('Metionina', am.methionine, eaaPRI.methionine)}
                        ${renderBarA('Cisteína', am.cysteine, eaaPRI.cysteine)}
                        ${renderBarA('Fenilalanina', am.phenylalanine, eaaPRI.phenylalanine)}
                        ${renderBarA('Treonina', am.threonine, eaaPRI.threonine)}
                        ${renderBarA('Triptófano', am.tryptophan, eaaPRI.tryptophan)}
                        ${renderBarA('Histidina', am.histidine, eaaPRI.histidine)}
                    `;
                })()}
            </div>
        </details>

        <!-- 3. Carbohidratos y Fibra/Azúcar -->
        <details class="glass-card" style="margin-bottom: 24px; cursor: pointer;">
            <summary style="padding: 14px 12px; outline: none; list-style: none;">
                <div style="font-size: 14px; font-weight: 600; margin-bottom: 12px; display: flex; justify-content: space-between;">
                    Carbohidratos 🍚 <span style="font-size: 12px; color: var(--primary-color);">▼ Expandir</span>
                </div>
                ${(() => {
                    const md = state.todayMacroDetail;
                    const percent = energy.carbsGrams > 0 ? Math.min(100, (md.carbsActual / energy.carbsGrams) * 100) : 0;
                    let barColor = 'var(--accent-color)';
                    if (percent >= 50) barColor = '#fbbf24';
                    if (percent >= 80) barColor = 'var(--secondary-color)';
                    return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>🍚 Carbohidratos (RI)</span><span>${md.carbsActual.toFixed(1)} / ${energy.carbsGrams} g <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                })()}
            </summary>
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 12px 14px 12px; border-top: 1px solid rgba(0,0,0,0.05); margin-top: 8px; padding-top: 16px;">
                ${(() => {
                    const md = state.todayMacroDetail;
                    const renderBarEFSA = (label, icon, currentVal, targetVal, unit, type) => {
                        const val = currentVal || 0;
                        const tVal = targetVal || 0;
                        const percent = tVal > 0 ? Math.min(100, (val / tVal) * 100) : 0;
                        let barColor = type === 'max' ? 'var(--secondary-color)' : 'var(--accent-color)';
                        if (type === 'max') { if (percent >= 80) barColor = '#fbbf24'; if (percent >= 100) barColor = 'var(--accent-color)'; }
                        else { if (percent >= 50) barColor = '#fbbf24'; if (percent >= 80) barColor = 'var(--secondary-color)'; }
                        return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>${icon} ${label}</span><span>${val.toFixed(1)} / ${tVal} ${unit} <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                    };
                    const fiberGoal = 25; 
                    const sugarMax = 25; 
                    return `
                        <div style="font-size: 12px; font-weight: bold; color: var(--primary-color); margin-bottom: -4px;">Fibra y Azúcares</div>
                        ${renderBarEFSA('Fibra Dietética (AI)', '🌾', md.fiber, fiberGoal, 'g', 'min')}
                        ${renderBarEFSA('Azúcares Totales (Límite)', '🍬', md.sugars, sugarMax, 'g', 'max')}
                    `;
                })()}
            </div>
        </details>

        <!-- 4. Grasas y Perfil Lipídico -->
        <details class="glass-card" style="margin-bottom: 24px; cursor: pointer;">
            <summary style="padding: 14px 12px; outline: none; list-style: none;">
                <div style="font-size: 14px; font-weight: 600; margin-bottom: 12px; display: flex; justify-content: space-between;">
                    Grasas y Perfil Lipídico 🥑 <span style="font-size: 12px; color: var(--primary-color);">▼ Expandir</span>
                </div>
                ${(() => {
                    const md = state.todayMacroDetail;
                    const percent = energy.fatsGrams > 0 ? Math.min(100, (md.fatsActual / energy.fatsGrams) * 100) : 0;
                    let barColor = 'var(--accent-color)';
                    if (percent >= 50) barColor = '#fbbf24';
                    if (percent >= 80) barColor = 'var(--secondary-color)';
                    return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>🥑 Grasas Totales (RI)</span><span>${md.fatsActual.toFixed(1)} / ${energy.fatsGrams} g <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                })()}
            </summary>
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 12px 14px 12px; border-top: 1px solid rgba(0,0,0,0.05); margin-top: 8px; padding-top: 16px;">
                ${(() => {
                    const md = state.todayMacroDetail;
                    const renderBarEFSA = (label, icon, currentVal, targetVal, unit, type, essential) => {
                        const val = currentVal || 0;
                        const tVal = targetVal || 0;
                        const percent = tVal > 0 ? Math.min(100, (val / tVal) * 100) : 0;
                        let barColor = type === 'max' ? 'var(--secondary-color)' : 'var(--accent-color)';
                        if (type === 'max') { if (percent >= 80) barColor = '#fbbf24'; if (percent >= 100) barColor = 'var(--accent-color)'; }
                        else { if (percent >= 50) barColor = '#fbbf24'; if (percent >= 80) barColor = 'var(--secondary-color)'; }
                        if (essential && percent >= 80) barColor = 'var(--primary-color)';
                        return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>${icon} ${label}</span><span>${val.toFixed(1)} / ${tVal} ${unit} <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                    };
                    
                    const tdee = energy.tdee || 2000;
                    const satMax = Math.round((tdee * 0.10) / 9); 
                    const monoTarget = Math.round((tdee * 0.15) / 9); 
                    const polyTarget = Math.round((tdee * 0.07) / 9); 
                    
                    return `
                        <div style="font-size: 12px; font-weight: bold; color: var(--primary-color); margin-bottom: -4px;">Desglose Lipídico</div>
                        ${renderBarEFSA('Saturadas (Límite <10%)', '🧈', md.sat, satMax, 'g', 'max', false)}
                        ${renderBarEFSA('Monoinsaturadas (Target)', '🫒', md.mono, monoTarget, 'g', 'min', false)}
                        ${renderBarEFSA('Poliinsaturadas (Target)', '🥜', md.poly, polyTarget, 'g', 'min', false)}
                        
                        <div style="font-size: 12px; font-weight: bold; color: var(--primary-color); margin-top: 12px; margin-bottom: -4px;">Ácidos Grasos Esenciales</div>
                        ${renderBarEFSA('Omega-6 LA (AI)', '⚡', md.omega6, 10, 'g', 'min', true)}
                        ${renderBarEFSA('Omega-3 ALA (AI)', '💧', md.omega3, 2, 'g', 'min', true)}
                        ${renderBarEFSA('EPA + DHA (AI/RTI)', '🐠', md.epa + md.dha, 0.25, 'g', 'min', true)}
                    `;
                })()}
            </div>
        </details>

        <!-- 5. Vitaminas -->
        <details class="glass-card" style="margin-bottom: 24px; cursor: pointer;">
            <summary style="padding: 14px 12px; font-weight: 600; outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                Requerimientos de Vitaminas ☀️ <span style="font-size: 12px; color: var(--primary-color);">▼ Expandir</span>
            </summary>
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 12px 14px 12px; border-top: 1px solid rgba(0,0,0,0.05); margin-top: 4px; padding-top: 16px;">
                ${(() => {
                    const micros = getUserMicronutrientNeeds(userProfile);
                    const current = state.todayMicros;
                    const renderBarMicro = (label, icon, currentVal, targetVal, unit) => {
                        const val = currentVal || 0;
                        const tVal = targetVal || 1; // Fallback to 1 to prevent div by zero
                        const percent = Math.min(100, (val / tVal) * 100);
                        let barColor = 'var(--accent-color)'; 
                        if (percent >= 50) barColor = '#fbbf24'; 
                        if (percent >= 80) barColor = 'var(--secondary-color)';
                        return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>${icon} ${label}</span><span>${Math.round(val)} / ${Math.round(tVal)} ${unit} <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                    };
                    return `
                        <div style="font-size: 12px; font-weight: bold; color: var(--primary-color); margin-bottom: -4px;">Liposolubles</div>
                        ${renderBarMicro('Vitamina A (PRI)', '👁️', current.vitA, micros.vitA.pri, 'µg')}
                        ${renderBarMicro('Vitamina D (AI)', '☀️', current.vitD, micros.vitD.pri, 'µg')}
                        ${renderBarMicro('Vitamina E (AI)', '🥑', current.vitE, micros.vitE.pri, 'mg')}
                        ${renderBarMicro('Vitamina K (AI)', '🥬', current.vitK, micros.vitK.pri, 'µg')}
                        <div style="font-size: 12px; font-weight: bold; color: var(--primary-color); margin-top: 12px; margin-bottom: -4px;">Hidrosolubles</div>
                        ${renderBarMicro('Vitamina C (PRI)', '🍊', current.vitaminC, micros.vitaminC.pri, 'mg')}
                        ${renderBarMicro('B1 Tiamina (PRI)', '🌾', current.vitB1, micros.vitB1.pri, 'mg')}
                        ${renderBarMicro('B2 Riboflavina (PRI)', '🥛', current.vitB2, micros.vitB2.pri, 'mg')}
                        ${renderBarMicro('B3 Niacina (PRI)', '🥜', current.vitB3, micros.vitB3.pri, 'mg')}
                        ${renderBarMicro('B5 Pantoténico (AI)', '🥚', current.vitB5, micros.vitB5.pri, 'mg')}
                        ${renderBarMicro('B6 Piridoxina (PRI)', '🥩', current.vitB6, micros.vitB6.pri, 'mg')}
                        ${renderBarMicro('B9 Ácido Fólico (PRI)', '🥦', current.vitB9, micros.vitB9.pri, 'µg')}
                        ${renderBarMicro('B12 Cobalamina (AI)', '🐟', current.vitB12, micros.vitB12.pri, 'µg')}
                    `;
                })()}
            </div>
        </details>

        <!-- 6. Minerales -->
        <details class="glass-card" style="margin-bottom: 24px; cursor: pointer;">
            <summary style="padding: 14px 12px; font-weight: 600; outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                Elementos y Minerales Traza 🪨 <span style="font-size: 12px; color: var(--primary-color);">▼ Expandir</span>
            </summary>
            <div style="display: flex; flex-direction: column; gap: 12px; padding: 0 12px 14px 12px; border-top: 1px solid rgba(0,0,0,0.05); margin-top: 4px; padding-top: 16px;">
                ${(() => {
                    const micros = getUserMicronutrientNeeds(userProfile);
                    const current = state.todayMicros;
                    const renderBarMicro = (label, icon, currentVal, targetVal, unit) => {
                        const val = currentVal || 0;
                        const tVal = targetVal || 1; // Fallback
                        const percent = Math.min(100, (val / tVal) * 100);
                        let barColor = 'var(--accent-color)'; 
                        if (percent >= 50) barColor = '#fbbf24'; 
                        if (percent >= 80) barColor = 'var(--secondary-color)';
                        return `<div><div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:4px;font-weight:500;"><span>${icon} ${label}</span><span>${Math.round(val)} / ${Math.round(tVal)} ${unit} <span style="color:${barColor};font-weight:bold;">(${Math.round(percent)}%)</span></span></div><div style="width:100%;height:8px;background:rgba(0,0,0,0.05);border-radius:4px;overflow:hidden;"><div style="width:${percent}%;height:100%;background:${barColor};border-radius:4px;transition:width 0.5s ease;"></div></div></div>`;
                    };
                    return `
                        ${renderBarMicro('Calcio (PRI)', '🦴', current.calcium, micros.calcium.pri, 'mg')}
                        ${renderBarMicro('Hierro (PRI)', '🩸', current.iron, micros.iron.pri, 'mg')}
                        ${renderBarMicro('Magnesio (AI)', '⚡', current.magnesium, micros.magnesium.pri, 'mg')}
                        ${renderBarMicro('Zinc (PRI)', '🛡️', current.zinc, micros.zinc.pri, 'mg')}
                        ${renderBarMicro('Potasio (AI)', '🍌', current.potassium, micros.potassium.pri, 'mg')}
                        ${renderBarMicro('Selenio (AI)', '🌱', current.selenium, micros.selenium.pri, 'µg')}
                        ${renderBarMicro('Yodo (AI)', '🌊', current.iodine, micros.iodine.pri, 'µg')}
                    `;
                })()}
            </div>
        </details>

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
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

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
                    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px; flex-wrap: wrap;">
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

        <div style="margin-bottom: 20px;">
            <input type="text" id="ai-custom-ingredients" 
                   placeholder="Ej: tomate, espinacas, pechuga de pollo..." 
                   style="width: 100%; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--glass-border); background: var(--card-bg); color: var(--text-main); font-size: 14px; box-sizing: border-box; outline: none;"
                   ${localStorage.getItem('temp_custom_ing') ? `value="${localStorage.getItem('temp_custom_ing')}"` : ''} 
                   oninput="localStorage.setItem('temp_custom_ing', this.value)">
            <small style="color: var(--text-muted); font-size: 11px; margin-top: 6px; display: block; padding-left: 4px;">Ingredientes extra para inspirar a la IA (Opcional)</small>
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

        const customIngInput = document.getElementById('ai-custom-ingredients');
        const customIngredients = customIngInput ? customIngInput.value : '';

        const mainContainer = document.getElementById('suggestions-container');
        if (mainContainer) {
            mainContainer.innerHTML = `
                <div style="text-align:center; padding: 40px; background: var(--card-bg); border-radius: 20px; border: 1px solid var(--glass-border);">
                    <div style="font-size: 50px; animation: pulse 1s infinite alternate;">🧑‍🍳</div>
                    <h3 style="color: var(--primary-color); margin-top: 16px;">${t('ai_cooking')}</h3>
                    <p class="text-muted" style="font-size: 14px;">Generando recetas personalizadas...</p>
                </div>
                <style>@keyframes pulse { 0% { opacity: 0.6; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1.05); } }</style>
            `;
        }

        const e = calculateEnergyNeeds(userProfile) || { tdee: 2000, proteinGrams: 100, carbsGrams: 200, fatsGrams: 60 };
        const dietState = evaluateDiet(userHistory);
        const gaps = {
            kcal: Math.round(e.tdee - dietState.todayMacroDetail.tdeeActual),
            pro: Math.round(e.proteinGrams - dietState.todayMacroDetail.proteinActual),
            cho: Math.round(e.carbsGrams - dietState.todayMacroDetail.carbsActual),
            fat: Math.round(e.fatsGrams - dietState.todayMacroDetail.fatsActual)
        };
        
        const aiMeals = await generateAIMeals(activeFilters.map(f => t(PORTIONS_GUIDE[f].key)), e, gaps, customIngredients);

        
        if (aiMeals && aiMeals.length > 0) {
            let aiHtml = '';
            aiMeals.forEach(meal => {
                const ingString = Array.isArray(meal.ingredients) ? meal.ingredients.join(', ') : (meal.ingredients || '');
                const instString = meal.instructions || '';
                const pBreakdown = meal.portionBreakdown || {};

                aiHtml += `
                    <details class="glass-card" style="margin-bottom: 16px; border-top: 4px solid var(--primary-color);">
                        <summary style="padding: 16px; cursor: pointer; list-style: none; outline: none; position: relative;">
                            <div style="display: flex; align-items: center; /*gap: 16px;*/">
                                <div style="font-size: 34px; background: rgba(255,255,255,0.5); border-radius: 12px; padding: 8px; margin-right: 14px;">✨</div>
                                <div style="flex: 1;">
                                    <h4 style="margin: 0 0 4px 0; font-size: 16px; display: flex; align-items: center; justify-content: space-between;">
                                        ${meal.name}
                                        <span style="font-size: 12px; opacity: 0.5;">▼</span>
                                    </h4>
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
                        </summary>
                        
                        <div style="padding: 0 16px 16px 16px;">
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
                    </details>
                `;
            });
            if (mainContainer) mainContainer.innerHTML = aiHtml;
        } else {
            if (mainContainer) mainContainer.innerHTML = `<div class="glass-card" style="text-align:center; padding: 20px;">Chef IA no ha podido generar recetas en este momento. Inténtalo de nuevo.</div>`;
        }
    };
}

function renderPortions() {
    const container = document.getElementById('registro-body') || document.getElementById('main-content');
    if (!container) return;

    // Evaluate diet dynamically for single source of truth
    const state = evaluateDiet(userHistory);

    let cardsHtml = '';
    Object.entries(PORTIONS_GUIDE).forEach(([key, info]) => {
        const currentVal = state.todayHits[key] || 0;
        cardsHtml += `
            <div class="glass-card" style="margin-bottom: 12px; display: flex; align-items: center; gap: 14px; padding: 14px; position: relative; flex-wrap: wrap;">
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

    container.innerHTML = `
        <p class="text-muted" style="margin-bottom: 16px;">${t('guide_desc')}</p>
        ${cardsHtml}
    `;

    // Interactive Steppers with auto-save
    document.querySelectorAll('.step-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const g = btn.dataset.group;
            window.openPortionSelector(g);
        });
    });
    document.querySelectorAll('.step-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const g = btn.dataset.group;
            const now = new Date();
            
            // 1. Try to knock off a V4 specific portion entry today for this group
            const todayEntries = userHistory.filter(entry => 
                new Date(entry.timestamp).toDateString() === now.toDateString() &&
                entry.portion && entry.portion.group === g
            );
            
            if (todayEntries.length > 0) {
                const lastEntry = todayEntries[todayEntries.length - 1]; // Removes most recent
                userHistory = userHistory.filter(entry => entry.id !== lastEntry.id);
                localStorage.setItem('aesan_history', JSON.stringify(userHistory));
                renderRegistro();
                return;
            }
            
            // 2. Fallback: try to knock off a legacy V3 grouped portion
            const todayLegacyEntry = userHistory.find(entry => {
                return new Date(entry.timestamp).toDateString() === now.toDateString() &&
                       entry.portions && entry.portions[g] > 0;
            });
            
            if (todayLegacyEntry) {
                todayLegacyEntry.portions[g]--;
                if (todayLegacyEntry.portions[g] <= 0) {
                    delete todayLegacyEntry.portions[g];
                }
                localStorage.setItem('aesan_history', JSON.stringify(userHistory));
                renderRegistro();
            }
        });
    });

    window.openPortionSelector = (groupKey) => {
        const info = PORTIONS_GUIDE[groupKey];
        if (!info || !info.details) return;

        // Ensure array of strings from details
        let lines = info.details.split('<br>');
        // Filter out tips that start with 💡
        lines = lines.filter(line => !line.trim().startsWith('💡'));

        let buttonsHtml = '';
        lines.forEach((line, index) => {
            buttonsHtml += `
                <button onclick="window.addSpecificPortion('${groupKey}', ${index})" style="width: 100%; text-align: left; padding: 12px; margin-bottom: 8px; border-radius: 12px; border: 1px solid var(--glass-border); background: rgba(99,102,241,0.05); color: var(--text-main); font-size: 14px; cursor: pointer; transition: background 0.2s;">
                    ${line}
                </button>
            `;
        });

        // Add a generic button just in case
        buttonsHtml += `
            <button onclick="window.addSpecificPortion('${groupKey}', -1)" style="width: 100%; text-align: center; padding: 12px; margin-top: 8px; border-radius: 12px; border: 1px dashed var(--primary-color); background: transparent; color: var(--primary-color); font-size: 14px; font-weight: 600; cursor: pointer;">
                Añadir porción genérica
            </button>
        `;

        window.showCustomModal(`¿Qué tipo de ${t(info.key).toLowerCase()}?`, `
            <div style="margin-top: 10px;">
                ${buttonsHtml}
            </div>
        `);
    };

    window.addSpecificPortion = (groupKey, optionIndex, timestampStr = null) => {
        closeModal();
        
        let d = new Date();
        if (window._unifiedLogTime) {
            const [hh, mm] = window._unifiedLogTime.split(':');
            d.setHours(parseInt(hh, 10), parseInt(mm, 10), 0, 0);
            window._unifiedLogTime = null; // Clear it to prevent bleed
        } else if (timestampStr) {
            d = new Date(timestampStr);
        }
        
        const ts = d.toISOString();
        const id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        
        userHistory.push({
            id: id,
            timestamp: ts,
            portion: {
                group: groupKey,
                optionIndex: optionIndex,
                qty: 1
            }
        });
        
        localStorage.setItem('aesan_history', JSON.stringify(userHistory));
        renderRegistro();

        if (window.showToast) {
            window.showToast('✅ Porción añadida', 2000);
        }
    };
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

// --- Options View (contains Profile + Bibliography) ---
let activeOptionTab = 'profile';

function renderOptions() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;

    const profileActive = activeOptionTab === 'profile';
    const biblioActive = activeOptionTab === 'bibliography';
    const disclaimerActive = activeOptionTab === 'disclaimer';

    mainContent.innerHTML = `
        <h2>⚙️ Opciones</h2>
        <div style="display: flex; gap: 8px; margin-bottom: 20px;">
            <button onclick="window.switchOptionTab('profile')" style="flex: 1; padding: 10px; border-radius: 10px; border: 2px solid ${profileActive ? 'var(--primary-color)' : 'var(--glass-border)'}; background: ${profileActive ? 'rgba(99,102,241,0.1)' : 'var(--card-bg)'}; color: ${profileActive ? 'var(--primary-color)' : 'var(--text-main)'}; font-size: 14px; font-weight: 600; cursor: pointer;">
                👤 Perfil
            </button>
            <button onclick="window.switchOptionTab('bibliography')" style="flex: 1; padding: 10px; border-radius: 10px; border: 2px solid ${biblioActive ? 'var(--primary-color)' : 'var(--glass-border)'}; background: ${biblioActive ? 'rgba(99,102,241,0.1)' : 'var(--card-bg)'}; color: ${biblioActive ? 'var(--primary-color)' : 'var(--text-main)'}; font-size: 14px; font-weight: 600; cursor: pointer;">
                📚 Bibliografía
            </button>
            <button onclick="window.switchOptionTab('disclaimer')" style="flex: 1; padding: 10px; border-radius: 10px; border: 2px solid ${disclaimerActive ? 'var(--primary-color)' : 'var(--glass-border)'}; background: ${disclaimerActive ? 'rgba(99,102,241,0.1)' : 'var(--card-bg)'}; color: ${disclaimerActive ? 'var(--primary-color)' : 'var(--text-main)'}; font-size: 14px; font-weight: 600; cursor: pointer;">
                ⚠️ Aviso Legal
            </button>
        </div>
        <div id="options-content"></div>
    `;

    window.switchOptionTab = (tab) => {
        activeOptionTab = tab;
        renderOptions();
    };

    if (profileActive) {
        renderProfileContent(document.getElementById('options-content'));
    } else if (biblioActive) {
        renderBibliography(document.getElementById('options-content'));
    } else {
        renderDisclaimer(document.getElementById('options-content'));
    }
}

function renderDisclaimer(container) {
    container.innerHTML = `
        <div class="glass-card" style="padding: 20px;">
            <h3 style="margin-top: 0; margin-bottom: 16px; color: #ef4444;">⚠️ Exención de Responsabilidad Médica</h3>
            
            <p style="font-size: 14px; color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
                <strong>1. Propósito Informativo:</strong> Esta aplicación (Sugest Food / AESAN Meal Suggestions) se ha diseñado exclusivamente con <strong>fines educativos e informativos</strong>. La información, los cálculos nutricionales, los planes de comidas sugeridos y cualquier otra recomendación generada por la aplicación (incluyendo aquellos generados por Inteligencia Artificial) no deben considerarse como consejo médico, diagnóstico o tratamiento profesional.
            </p>
            
            <p style="font-size: 14px; color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
                <strong>2. Consulta a un Profesional de la Salud:</strong> Antes de realizar cambios significativos en tu dieta, iniciar cualquier programa nutricional, o modificar tus hábitos de alimentación, debes consultar siempre a tu médico, dietista o nutricionista colegiado. Esto es especialmente importante si:
            </p>
            <ul style="font-size: 13px; color: var(--text-main); line-height: 1.6; padding-left: 20px; margin-bottom: 16px;">
                <li>Tienes condiciones médicas preexistentes (como diabetes, enfermedades cardiovasculares, enfermedad celíaca, etc.).</li>
                <li>Estás embarazada o en período de lactancia.</li>
                <li>Padeces de trastornos de la conducta alimentaria (TCA).</li>
                <li>Tomas medicamentos que puedan interactuar con componentes dietéticos.</li>
            </ul>

            <p style="font-size: 14px; color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
                <strong>3. Limitaciones:</strong> Aunque los cálculos energéticos y los valores dietéticos de referencia se basan en fórmulas científicas estándar (ej. ecuación de Mifflin-St Jeor) y en los perfiles nutricionales de entidades oficiales (EFSA, AESAN), los resultados son <strong>estimaciones matemáticas genéricas</strong>. No capturan todas las variables del complejo metabolismo humano individual ni garantizan prevenir déficits o excesos nutricionales absolutos.
            </p>

            <p style="font-size: 14px; color: var(--text-main); line-height: 1.6; margin-bottom: 16px;">
                <strong>4. Uso de IA:</strong> Las sugerencias de recetas proporcionadas por el módulo "Chef IA" son generadas automáticamente. Aunque se instruye al modelo a proporcionar recetas seguras y balanceadas y a alertar sobre consideraciones médicas cuando son evidentes, existe riesgo de que la IA genere <strong>alucinaciones</strong>, ofrezca combinaciones inusuales o no considere adecuadamente ciertos solapamientos alergénicos. Se recomienda revisar el sentido común de dichas recetas.
            </p>

            <div style="background: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; padding: 12px; border-radius: 4px;">
                <p style="margin: 0; font-size: 13px; font-weight: 600; color: #b91c1c;">
                    El uso de esta aplicación implica la aceptación de este aviso. El creador y desarrollador de la aplicación no asume ninguna responsabilidad legal, implícita o explícita, por cualquier daño, lesión o problema de salud, directo o indirecto, derivado del uso o mala interpretación de la información aquí proporcionada.
                </p>
            </div>
        </div>
    `;
}


function renderBibliography(container) {
    container.innerHTML = `
        <div class="glass-card" style="padding: 20px;">
            <h3 style="margin-top: 0; margin-bottom: 16px;">📚 Bibliografía Científica</h3>
            <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 20px;">Todas las referencias científicas utilizadas para los cálculos nutricionales, recomendaciones y valores de referencia de esta aplicación.</p>

            <div style="font-size: 12px; font-weight: 700; color: var(--primary-color); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Organismos Oficiales</div>
            <ul style="font-size: 13px; line-height: 1.8; padding-left: 16px; margin-bottom: 20px; color: var(--text-main);">
                <li><strong>EFSA (2017).</strong> Dietary Reference Values for nutrients. EFSA Journal, 15(11), e04991. — <em>Vitaminas, minerales, aminoácidos (PRI/AI)</em></li>
                <li><strong>EFSA NDA Panel (2012).</strong> Scientific Opinion on Dietary Reference Values for protein. EFSA Journal, 10(2), 2557. — <em>Aminoácidos esenciales mg/kg/día</em></li>
                <li><strong>AESAN / BEDCA (2023).</strong> Base de Datos Española de Composición de Alimentos. bedca.net — <em>Composición nutricional de 48 alimentos locales</em></li>
                <li><strong>OMS/WHO (2015).</strong> Guideline: Sugars intake for adults and children. Geneva. — <em>Límite de azúcares añadidos (<25g/día)</em></li>
                <li><strong>EFSA NDA Panel (2010).</strong> Scientific Opinion on Dietary Reference Values for fats. EFSA Journal, 8(3), 1461. — <em>Ácidos grasos saturados, omega-3, EPA+DHA</em></li>
            </ul>

            <div style="font-size: 12px; font-weight: 700; color: var(--primary-color); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Nutrición Deportiva</div>
            <ul style="font-size: 13px; line-height: 1.8; padding-left: 16px; margin-bottom: 20px; color: var(--text-main);">
                <li><strong>Kerksick, C.M. et al. (2018).</strong> ISSN exercise & sports nutrition review update: research & recommendations. JISSN, 15(1), 38. — <em>Multiplicadores de micronutrientes para deportistas</em></li>
                <li><strong>Thomas, D.T., Erdman, K.A. & Burke, L.M. (2016).</strong> Position of the Academy of Nutrition and Dietetics, ACSM: Nutrition and Athletic Performance. JAND, 116(3), 501–528. — <em>Requerimientos energéticos y proteicos</em></li>
                <li><strong>Jäger, R. et al. (2017).</strong> ISSN Position Stand: protein and exercise. JISSN, 14, 20. — <em>Requerimientos de aminoácidos en fuerza vs resistencia</em></li>
            </ul>

            <div style="font-size: 12px; font-weight: 700; color: var(--primary-color); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Micronutrientes en Deporte</div>
            <ul style="font-size: 13px; line-height: 1.8; padding-left: 16px; margin-bottom: 20px; color: var(--text-main);">
                <li><strong>Peeling, P. et al. (2008).</strong> Athletic induced iron deficiency: new insights into the role of inflammation, cytokines and hormones. Eur J Appl Physiol, 103(4), 381–391. — <em>Hierro +30% en resistencia</em></li>
                <li><strong>Close, G.L. et al. (2013).</strong> Assessment of vitamin D concentration in non-supplemented professional athletes and healthy adults during the winter months in the UK. J Sports Sci, 31(4), 344–353. — <em>Vitamina D +25% en fuerza</em></li>
                <li><strong>Nielsen, F.H. & Lukaski, H.C. (2006).</strong> Update on the relationship between magnesium and exercise. Magnes Res, 19(3), 180–189. — <em>Magnesio +15–20% en deportistas</em></li>
                <li><strong>Kilic, M. (2007).</strong> Effect of fatiguing bicycle exercise on thyroid, zinc and testosterone in sedentary males supplemented with oral zinc. Neuro Endocrinol Lett, 28(5), 681–685. — <em>Zinc +20% en fuerza</em></li>
                <li><strong>Brilla, L.R. & Haley, T.F. (1992).</strong> Effect of magnesium supplementation on strength training in humans. J Am Coll Nutr, 11(3), 326–329. — <em>Magnesio en síntesis proteica</em></li>
            </ul>

            <div style="font-size: 12px; font-weight: 700; color: var(--primary-color); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Ecuaciones y Metabolismo</div>
            <ul style="font-size: 13px; line-height: 1.8; padding-left: 16px; margin-bottom: 20px; color: var(--text-main);">
                <li><strong>Mifflin, M.D. et al. (1990).</strong> A new predictive equation for resting energy expenditure in healthy individuals. Am J Clin Nutr, 51(2), 241–247. — <em>Ecuación Mifflin-St Jeor para BMR</em></li>
                <li><strong>EFSA NDA Panel (2013).</strong> Scientific Opinion on Dietary Reference Values for energy. EFSA Journal, 11(1), 3005. — <em>Niveles de actividad física (PAL)</em></li>
            </ul>

            <div style="font-size: 12px; font-weight: 700; color: var(--primary-color); margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">Bases de Datos de Alimentos</div>
            <ul style="font-size: 13px; line-height: 1.8; padding-left: 16px; color: var(--text-main);">
                <li><strong>Open Food Facts (2024).</strong> Base de datos colaborativa de productos alimentarios. openfoodfacts.org — <em>API de búsqueda de productos comerciales</em></li>
                <li><strong>BEDCA / FEN (2023).</strong> Base de Datos Española de Composición de Alimentos. bedca.net — <em>Datos por 100g: macros, micros, aminoácidos</em></li>
            </ul>
        </div>
    `;
}

function renderProfile() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    renderProfileContent(mainContent);
}

function renderProfileContent(container) {
    if (!container) return;

    const p = userProfile || { sports: {} };
    
    // Safety check function for template logic
    const safeStr = (val) => val ? val : '';
    const isSelected = (val, match) => val === match ? 'selected' : '';

    container.innerHTML = `
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
                    <label style="display: flex; align-items: center; gap: 4px;">
                        ${t('activity_label')}
                        <span onclick="window.showCustomModal('${t('activity_label')} 💡', '<b>Sedentario:</b> Poco/ningún ejercicio (oficina).<br><b>Ligero:</b> 1-3 días (caminar, yoga).<br><b>Moderado:</b> 3-5 días (gimnasio, trote).<br><b>Muy Activo:</b> 6-7 días (entrenamiento diario).<br><b>Extra Activo:</b> 2v/día o trabajo físico pesado.')" style="cursor:pointer; background:var(--primary-color); color:white; border-radius:50%; width:14px; height:14px; font-size:10px; display:flex; align-items:center; justify-content:center; font-weight:bold;">?</span>
                    </label>
                    <select id="p-activity">
                        <option value="A" ${isSelected(p.activityLevel, 'A')}>Sedentario (Bajo)</option>
                        <option value="B" ${isSelected(p.activityLevel, 'B')}>Actividad Ligera</option>
                        <option value="C" ${isSelected(p.activityLevel, 'C')}>Actividad Moderada</option>
                        <option value="D" ${isSelected(p.activityLevel, 'D')}>Muy Activo</option>
                        <option value="E" ${isSelected(p.activityLevel, 'E')}>Extra Activo (+15h/sem)</option>
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
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                <div style="flex: 1; min-width: 80px;">
                    <label style="font-size: 11px; display: flex; align-items: center; gap: 4px;">
                        ${t('strength')}
                        <span onclick="window.showCustomModal('${t('strength')} 💪', 'Gimnasio, calistenia, crossfit. Aumenta la demanda diaria de aminoácidos para reparación muscular.')" style="cursor:pointer; background:var(--primary-color); color:white; border-radius:50%; width:12px; height:12px; font-size:9px; display:flex; align-items:center; justify-content:center; font-weight:bold;">?</span>
                    </label>
                    <input type="number" id="p-strength" value="${p.sports?.strength || 0}" min="0">
                </div>
                <div style="flex: 1; min-width: 80px;">
                    <label style="font-size: 11px; display: flex; align-items: center; gap: 4px;">
                        ${t('endurance')}
                        <span onclick="window.showCustomModal('${t('endurance')} 🏃', 'Running, ciclismo, natación. Aumenta la demanda de hidratos de carbono, magnesio y hierro.')" style="cursor:pointer; background:var(--primary-color); color:white; border-radius:50%; width:12px; height:12px; font-size:9px; display:flex; align-items:center; justify-content:center; font-weight:bold;">?</span>
                    </label>
                    <input type="number" id="p-endurance" value="${p.sports?.endurance || 0}" min="0">
                </div>
                <div style="flex: 1; min-width: 80px;">
                    <label style="font-size: 11px; display: flex; align-items: center; gap: 4px;">
                        ${t('team')}
                        <span onclick="window.showCustomModal('${t('team')} ⚽', 'Fútbol, tenis, baloncesto. Mezcla ráfagas de alta intensidad con recuperación. Demanda mixta.')" style="cursor:pointer; background:var(--primary-color); color:white; border-radius:50%; width:12px; height:12px; font-size:9px; display:flex; align-items:center; justify-content:center; font-weight:bold;">?</span>
                    </label>
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

document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
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
});
