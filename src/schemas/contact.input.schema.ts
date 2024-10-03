export const ContactInputSchema = {
    type: 'object',
    properties: {
      date: {
        type: 'string',
        format: 'date-time',
        description: 'Fecha de creación del contacto',
      },
      customer: {
        type: 'string',
        description: 'Nombre del cliente',
      },
      email: {
        type: 'string',
        format: 'email',
        description: 'Correo electrónico del cliente',
      },
      phone: {
        type: 'string',
        description: 'Número de teléfono del cliente',
      },
      subject: {
        type: 'string',
        description: 'Asunto del contacto',
      },
      comment: {
        type: 'string',
        description: 'Comentario del cliente',
      },
      archived: {
        type: 'boolean',
        description: 'Estado de archivo del contacto',
      },
    },
    required: ['date', 'customer', 'email', 'subject'], // Ajusta esto según tus requerimientos
  };
  