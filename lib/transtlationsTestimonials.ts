export interface TestimonialTranslations {
    title: string;
    subtitle: string;
    addTestimonial: string;
    editTestimonial: string;
    deleteTestimonial: string;
    verifyEmail: string;
    emailPlaceholder: string;
    verify: string;
    name: string;
    location: string;
    comment: string;
    rating: string;
    submit: string;
    cancel: string;
    errorNoTestimonial: string;
    errorSubmitting: string;
    errorEditing: string;
    errorDeleting: string;
  }
  
  export type Language = keyof typeof translations;
  
  export const translations = {
    en: {
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Real experiences from people like you",
        addTestimonial: "Add Testimonial",
        editTestimonial: "Edit Testimonial",
        deleteTestimonial: "Delete Testimonial",
        verifyEmail: "Verify Email",
        emailPlaceholder: "Enter your email",
        verify: "Verify",
        name: "Name",
        location: "Location",
        comment: "Comment",
        rating: "Rating",
        submit: "Submit",
        cancel: "Cancel",
        errorNoTestimonial: "No testimonial found with this email address.",
        errorSubmitting: "Error submitting testimonial",
        errorEditing: "Error editing testimonial",
        errorDeleting: "Error deleting testimonial"
      },
    },
    fr: {
      testimonials: {
        title: "Ce que disent nos clients",
        subtitle: "Expériences réelles de personnes comme vous",
        addTestimonial: "Ajouter un témoignage",
        editTestimonial: "Modifier le témoignage",
        deleteTestimonial: "Supprimer le témoignage",
        verifyEmail: "Vérifier l'email",
        emailPlaceholder: "Entrez votre email",
        verify: "Vérifier",
        name: "Nom",
        location: "Emplacement",
        comment: "Commentaire",
        rating: "Évaluation",
        submit: "Soumettre",
        cancel: "Annuler",
        errorNoTestimonial: "Aucun témoignage trouvé avec cette adresse email.",
        errorSubmitting: "Erreur lors de l'envoi du témoignage",
        errorEditing: "Erreur lors de la modification du témoignage",
        errorDeleting: "Erreur lors de la suppression du témoignage"
      },
    },
    es: {
      testimonials: {
        title: "Lo que dicen nuestros clientes",
        subtitle: "Experiencias reales de personas como tú",
        addTestimonial: "Agregar Testimonio",
        editTestimonial: "Editar Testimonio",
        deleteTestimonial: "Eliminar Testimonio",
        verifyEmail: "Verificar Email",
        emailPlaceholder: "Ingresa tu email",
        verify: "Verificar",
        name: "Nombre",
        location: "Ubicación",
        comment: "Comentario",
        rating: "Calificación",
        submit: "Enviar",
        cancel: "Cancelar",
        errorNoTestimonial: "No se encontró un testimonio con ese correo electrónico.",
        errorSubmitting: "Error al enviar el testimonio",
        errorEditing: "Error al editar el testimonio",
        errorDeleting: "Error al eliminar el testimonio"
      },
    }
  } as const;
  
  