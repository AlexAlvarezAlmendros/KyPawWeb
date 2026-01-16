export interface TutorialStep {
  title: string;
  description: string;
  image?: string;
  tip?: string;
}

export interface Tutorial {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  categoryIcon: string;
  duration: string;
  difficulty: 'Fácil' | 'Medio' | 'Avanzado';
  thumbnail?: string;
  videoUrl?: string;
  steps: TutorialStep[];
  relatedTutorials?: string[];
}

export interface TutorialCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const tutorialCategories: TutorialCategory[] = [
  {
    id: 'primeros-pasos',
    name: 'Primeros Pasos',
    icon: '🚀',
    description: 'Aprende lo básico para empezar con KyPaw'
  },
  {
    id: 'gestion-mascotas',
    name: 'Gestión de Mascotas',
    icon: '🐾',
    description: 'Administra los perfiles de tus peludos'
  },
  {
    id: 'salud',
    name: 'Salud',
    icon: '🏥',
    description: 'Registra visitas, vacunas y medicamentos'
  },
  {
    id: 'recordatorios',
    name: 'Recordatorios',
    icon: '⏰',
    description: 'Configura alertas y notificaciones'
  },
  {
    id: 'actividad',
    name: 'Actividad',
    icon: '🚶',
    description: 'Registra paseos y actividades'
  }
];

export const tutorials: Tutorial[] = [
  // Primeros Pasos
  {
    id: '1',
    slug: 'crear-cuenta',
    title: 'Cómo crear tu cuenta',
    description: 'Aprende a registrarte en KyPaw y configurar tu perfil inicial.',
    category: 'primeros-pasos',
    categoryIcon: '🚀',
    duration: '2 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Descarga la app',
        description: 'Descarga KyPaw desde App Store o Google Play Store en tu dispositivo móvil.',
        tip: 'Asegúrate de tener suficiente espacio en tu dispositivo.'
      },
      {
        title: 'Abre la app',
        description: 'Toca el icono de KyPaw para abrir la aplicación por primera vez.',
      },
      {
        title: 'Selecciona "Crear cuenta"',
        description: 'En la pantalla de bienvenida, toca el botón "Crear cuenta" para comenzar el registro.',
      },
      {
        title: 'Introduce tus datos',
        description: 'Rellena el formulario con tu email y crea una contraseña segura.',
        tip: 'Usa una contraseña de al menos 8 caracteres con letras y números.'
      },
      {
        title: '¡Listo!',
        description: 'Tu cuenta ha sido creada. Ahora puedes añadir tu primera mascota.',
      }
    ],
    relatedTutorials: ['anadir-primera-mascota', 'tour-app']
  },
  {
    id: '2',
    slug: 'anadir-primera-mascota',
    title: 'Añadir tu primera mascota',
    description: 'Configura el perfil de tu mascota con toda su información.',
    category: 'primeros-pasos',
    categoryIcon: '🚀',
    duration: '3 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Accede a "Mis Mascotas"',
        description: 'Desde la pantalla principal, toca en la sección "Mis Mascotas" en la barra de navegación inferior.',
      },
      {
        title: 'Toca el botón "+"',
        description: 'Pulsa el botón de añadir (+) para crear un nuevo perfil de mascota.',
      },
      {
        title: 'Selecciona el tipo de mascota',
        description: 'Elige si tu mascota es un perro, gato u otro tipo de animal.',
      },
      {
        title: 'Añade la foto',
        description: 'Toma una foto de tu mascota o selecciona una de tu galería.',
        tip: 'Una foto clara ayuda a identificar rápidamente a tu mascota.'
      },
      {
        title: 'Completa la información',
        description: 'Introduce el nombre, fecha de nacimiento, raza y peso de tu mascota.',
      },
      {
        title: 'Guarda el perfil',
        description: 'Revisa la información y toca "Guardar" para crear el perfil.',
      }
    ],
    relatedTutorials: ['crear-cuenta', 'editar-perfil-mascota']
  },
  {
    id: '3',
    slug: 'tour-app',
    title: 'Tour por la aplicación',
    description: 'Conoce todas las secciones y funcionalidades de KyPaw.',
    category: 'primeros-pasos',
    categoryIcon: '🚀',
    duration: '5 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Pantalla "Hoy"',
        description: 'Esta es tu pantalla principal donde verás las tareas y recordatorios del día.',
      },
      {
        title: 'Sección "Mis Mascotas"',
        description: 'Aquí encontrarás todos los perfiles de tus mascotas con su información detallada.',
      },
      {
        title: 'Historial de Salud',
        description: 'Accede al historial médico completo de cada mascota desde su perfil.',
      },
      {
        title: 'Configuración',
        description: 'En el menú de ajustes puedes personalizar notificaciones y preferencias.',
      }
    ],
    relatedTutorials: ['crear-cuenta', 'anadir-primera-mascota']
  },

  // Gestión de Mascotas
  {
    id: '4',
    slug: 'editar-perfil-mascota',
    title: 'Editar perfil de mascota',
    description: 'Actualiza la información y foto de tu mascota.',
    category: 'gestion-mascotas',
    categoryIcon: '🐾',
    duration: '2 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Accede al perfil',
        description: 'Ve a "Mis Mascotas" y selecciona la mascota que quieres editar.',
      },
      {
        title: 'Toca el icono de editar',
        description: 'Pulsa el icono del lápiz en la esquina superior derecha.',
      },
      {
        title: 'Modifica los datos',
        description: 'Cambia la información que necesites: nombre, peso, foto, etc.',
      },
      {
        title: 'Guarda los cambios',
        description: 'Toca "Guardar" para aplicar las modificaciones.',
      }
    ],
    relatedTutorials: ['anadir-primera-mascota', 'gestionar-multiples-mascotas']
  },
  {
    id: '5',
    slug: 'gestionar-multiples-mascotas',
    title: 'Gestionar múltiples mascotas',
    description: 'Aprende a manejar varios perfiles de mascotas eficientemente.',
    category: 'gestion-mascotas',
    categoryIcon: '🐾',
    duration: '3 min',
    difficulty: 'Medio',
    steps: [
      {
        title: 'Añade más mascotas',
        description: 'Desde "Mis Mascotas", puedes añadir tantos perfiles como necesites.',
      },
      {
        title: 'Navega entre perfiles',
        description: 'Desliza horizontalmente o toca en cada mascota para ver su información.',
      },
      {
        title: 'Filtra por mascota',
        description: 'En la pantalla "Hoy", puedes filtrar las tareas por mascota específica.',
      },
      {
        title: 'Recordatorios individuales',
        description: 'Configura recordatorios específicos para cada una de tus mascotas.',
      }
    ],
    relatedTutorials: ['editar-perfil-mascota', 'crear-recordatorio']
  },

  // Salud
  {
    id: '6',
    slug: 'registrar-visita-veterinaria',
    title: 'Registrar visita veterinaria',
    description: 'Guarda toda la información de las visitas al veterinario.',
    category: 'salud',
    categoryIcon: '🏥',
    duration: '3 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Accede al historial de salud',
        description: 'Desde el perfil de tu mascota, toca en "Historial de Salud".',
      },
      {
        title: 'Toca "Nueva Visita"',
        description: 'Pulsa el botón para añadir una nueva visita veterinaria.',
      },
      {
        title: 'Introduce los detalles',
        description: 'Añade la fecha, clínica, veterinario y motivo de la visita.',
      },
      {
        title: 'Añade el diagnóstico',
        description: 'Escribe el diagnóstico y tratamiento recomendado.',
        tip: 'Puedes fotografiar la receta para tenerla siempre disponible.'
      },
      {
        title: 'Adjunta documentos',
        description: 'Añade fotos de recetas, análisis o cualquier documento relevante.',
      },
      {
        title: 'Guarda la visita',
        description: 'Revisa toda la información y toca "Guardar".',
      }
    ],
    relatedTutorials: ['control-vacunas', 'anadir-medicamento']
  },
  {
    id: '7',
    slug: 'control-vacunas',
    title: 'Control de vacunas',
    description: 'Mantén actualizado el calendario de vacunación.',
    category: 'salud',
    categoryIcon: '🏥',
    duration: '2 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Accede a Vacunas',
        description: 'Desde el historial de salud, selecciona la sección "Vacunas".',
      },
      {
        title: 'Añade una vacuna',
        description: 'Toca "+" para registrar una nueva vacuna.',
      },
      {
        title: 'Selecciona el tipo',
        description: 'Elige el tipo de vacuna de la lista o añade una personalizada.',
      },
      {
        title: 'Configura el recordatorio',
        description: 'Activa el recordatorio automático para la próxima dosis.',
        tip: 'KyPaw te avisará cuando se acerque la fecha de revacunación.'
      }
    ],
    relatedTutorials: ['registrar-visita-veterinaria', 'crear-recordatorio']
  },
  {
    id: '8',
    slug: 'anadir-medicamento',
    title: 'Añadir medicamento',
    description: 'Registra los medicamentos y tratamientos de tu mascota.',
    category: 'salud',
    categoryIcon: '🏥',
    duration: '2 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Ve a Medicamentos',
        description: 'En el historial de salud, accede a la sección "Medicamentos".',
      },
      {
        title: 'Añade nuevo medicamento',
        description: 'Toca el botón "+" para registrar un medicamento.',
      },
      {
        title: 'Introduce la información',
        description: 'Nombre del medicamento, dosis, frecuencia y duración del tratamiento.',
      },
      {
        title: 'Activa recordatorios',
        description: 'Configura alertas para no olvidar ninguna toma.',
      }
    ],
    relatedTutorials: ['registrar-visita-veterinaria', 'crear-recordatorio']
  },

  // Recordatorios
  {
    id: '9',
    slug: 'crear-recordatorio',
    title: 'Crear un recordatorio',
    description: 'Configura alertas para no olvidar ningún cuidado.',
    category: 'recordatorios',
    categoryIcon: '⏰',
    duration: '2 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Toca el botón "+"',
        description: 'Desde la pantalla "Hoy", pulsa el botón de añadir.',
      },
      {
        title: 'Selecciona el tipo',
        description: 'Elige entre: medicamento, cita, comida, paseo u otro.',
      },
      {
        title: 'Configura fecha y hora',
        description: 'Establece cuándo quieres recibir el recordatorio.',
      },
      {
        title: 'Selecciona la mascota',
        description: 'Elige a qué mascota corresponde este recordatorio.',
      },
      {
        title: 'Guarda el recordatorio',
        description: 'Revisa y guarda. Recibirás una notificación a la hora indicada.',
      }
    ],
    relatedTutorials: ['configurar-repeticiones', 'marcar-completado']
  },
  {
    id: '10',
    slug: 'configurar-repeticiones',
    title: 'Configurar repeticiones',
    description: 'Programa recordatorios recurrentes automáticamente.',
    category: 'recordatorios',
    categoryIcon: '⏰',
    duration: '2 min',
    difficulty: 'Medio',
    steps: [
      {
        title: 'Crea o edita un recordatorio',
        description: 'Accede a la configuración de un recordatorio nuevo o existente.',
      },
      {
        title: 'Activa "Repetir"',
        description: 'Busca la opción de repetición y actívala.',
      },
      {
        title: 'Selecciona la frecuencia',
        description: 'Elige: diario, semanal, mensual o personalizado.',
      },
      {
        title: 'Configura el fin',
        description: 'Define si el recordatorio es indefinido o tiene fecha de fin.',
        tip: 'Para tratamientos, configura la fecha de fin según la duración indicada.'
      }
    ],
    relatedTutorials: ['crear-recordatorio', 'marcar-completado']
  },
  {
    id: '11',
    slug: 'marcar-completado',
    title: 'Marcar tarea completada',
    description: 'Aprende a gestionar y completar tus tareas diarias.',
    category: 'recordatorios',
    categoryIcon: '⏰',
    duration: '1 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Ve a la pantalla "Hoy"',
        description: 'Accede a la lista de tareas pendientes del día.',
      },
      {
        title: 'Localiza la tarea',
        description: 'Busca el recordatorio que has completado.',
      },
      {
        title: 'Marca como completado',
        description: 'Toca el checkbox o desliza la tarea hacia la derecha.',
        tip: 'Las tareas completadas se mueven automáticamente al historial.'
      }
    ],
    relatedTutorials: ['crear-recordatorio', 'configurar-repeticiones']
  },

  // Actividad
  {
    id: '12',
    slug: 'registrar-paseo',
    title: 'Registrar un paseo',
    description: 'Guarda la ruta, distancia y tiempo de cada paseo.',
    category: 'actividad',
    categoryIcon: '🚶',
    duration: '2 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Accede a Paseos',
        description: 'Desde el perfil de tu mascota, ve a "Diario de Paseos".',
      },
      {
        title: 'Inicia el paseo',
        description: 'Toca el botón de "Play" para comenzar a registrar.',
      },
      {
        title: 'Pasea con tu mascota',
        description: 'La app registrará automáticamente la ruta y distancia.',
        tip: 'Asegúrate de tener el GPS activado para un registro preciso.'
      },
      {
        title: 'Finaliza el paseo',
        description: 'Cuando termines, toca "Finalizar" para guardar el registro.',
      },
      {
        title: 'Añade notas (opcional)',
        description: 'Puedes añadir observaciones o el estado de ánimo de tu mascota.',
      }
    ],
    relatedTutorials: ['ver-historial-paseos', 'anadir-incidentes']
  },
  {
    id: '13',
    slug: 'ver-historial-paseos',
    title: 'Ver historial de paseos',
    description: 'Consulta el registro de actividad de tu mascota.',
    category: 'actividad',
    categoryIcon: '🚶',
    duration: '1 min',
    difficulty: 'Fácil',
    steps: [
      {
        title: 'Accede a Paseos',
        description: 'Ve al "Diario de Paseos" desde el perfil de tu mascota.',
      },
      {
        title: 'Explora el historial',
        description: 'Verás un resumen con estadísticas semanales y mensuales.',
      },
      {
        title: 'Consulta detalles',
        description: 'Toca en cualquier paseo para ver la ruta completa en el mapa.',
      }
    ],
    relatedTutorials: ['registrar-paseo', 'anadir-incidentes']
  },
  {
    id: '14',
    slug: 'anadir-incidentes',
    title: 'Añadir incidentes en paseos',
    description: 'Registra cualquier evento importante durante el paseo.',
    category: 'actividad',
    categoryIcon: '🚶',
    duration: '1 min',
    difficulty: 'Medio',
    steps: [
      {
        title: 'Durante o después del paseo',
        description: 'Puedes añadir incidentes mientras paseas o al finalizar.',
      },
      {
        title: 'Toca "Añadir incidente"',
        description: 'Selecciona esta opción en la pantalla del paseo activo.',
      },
      {
        title: 'Describe el incidente',
        description: 'Indica qué ha ocurrido: encuentro con otro perro, hizo sus necesidades, etc.',
      },
      {
        title: 'Guarda el registro',
        description: 'El incidente quedará asociado a ese paseo específico.',
      }
    ],
    relatedTutorials: ['registrar-paseo', 'ver-historial-paseos']
  }
];

export const getTutorialBySlug = (slug: string): Tutorial | undefined => {
  return tutorials.find(t => t.slug === slug);
};

export const getTutorialsByCategory = (categoryId: string): Tutorial[] => {
  return tutorials.filter(t => t.category === categoryId);
};

export const getRelatedTutorials = (slugs: string[]): Tutorial[] => {
  return tutorials.filter(t => slugs.includes(t.slug));
};
