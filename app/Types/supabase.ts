export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)";
  };
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      Booking: {
        Row: {
          cabinId: number | null;
          cabinsPrice: number | null;
          created_at: string;
          endDate: string | null;
          extrasPrice: number | null;
          guestID: number | null;
          hasBreakfast: boolean | null;
          id: number;
          isPaid: boolean | null;
          numGuests: number | null;
          numNights: number | null;
          observations: string | null;
          startDate: string | null;
          status: string | null;
          totalPrice: number | null;
        };
        Insert: {
          cabinId?: number | null;
          cabinsPrice?: number | null;
          created_at?: string;
          endDate?: string | null;
          extrasPrice?: number | null;
          guestID?: number | null;
          hasBreakfast?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: number | null;
          numNights?: number | null;
          observations?: string | null;
          startDate?: string | null;
          status?: string | null;
          totalPrice?: number | null;
        };
        Update: {
          cabinId?: number | null;
          cabinsPrice?: number | null;
          created_at?: string;
          endDate?: string | null;
          extrasPrice?: number | null;
          guestID?: number | null;
          hasBreakfast?: boolean | null;
          id?: number;
          isPaid?: boolean | null;
          numGuests?: number | null;
          numNights?: number | null;
          observations?: string | null;
          startDate?: string | null;
          status?: string | null;
          totalPrice?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "Booking_cabinId_fkey";
            columns: ["cabinId"];
            isOneToOne: false;
            referencedRelation: "Cabins";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "Booking_guestID_fkey";
            columns: ["guestID"];
            isOneToOne: false;
            referencedRelation: "Guest";
            referencedColumns: ["id"];
          }
        ];
      };
      Cabins: {
        Row: {
          created_at: string;
          description: string | null;
          discount: number | null;
          id: number;
          image: string | null;
          maxCapacity: number | null;
          Name: string | null;
          regularPrice: number | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          discount?: number | null;
          id?: number;
          image?: string | null;
          maxCapacity?: number | null;
          Name?: string | null;
          regularPrice?: number | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          discount?: number | null;
          id?: number;
          image?: string | null;
          maxCapacity?: number | null;
          Name?: string | null;
          regularPrice?: number | null;
        };
        Relationships: [];
      };
      Guest: {
        Row: {
          countryFlag: string | null;
          created_at: string;
          email: string | null;
          fullName: string | null;
          id: number;
          nationalID: string | null;
          nationality: string | null;
        };
        Insert: {
          countryFlag?: string | null;
          created_at?: string;
          email?: string | null;
          fullName?: string | null;
          id?: number;
          nationalID?: string | null;
          nationality?: string | null;
        };
        Update: {
          countryFlag?: string | null;
          created_at?: string;
          email?: string | null;
          fullName?: string | null;
          id?: number;
          nationalID?: string | null;
          nationality?: string | null;
        };
        Relationships: [];
      };
      Settings: {
        Row: {
          breakfastPrice: number | null;
          created_at: string;
          id: number;
          MaxBookingLength: number | null;
          maxGuestsPerBooking: number | null;
          minBookingLength: number | null;
        };
        Insert: {
          breakfastPrice?: number | null;
          created_at?: string;
          id?: number;
          MaxBookingLength?: number | null;
          maxGuestsPerBooking?: number | null;
          minBookingLength?: number | null;
        };
        Update: {
          breakfastPrice?: number | null;
          created_at?: string;
          id?: number;
          MaxBookingLength?: number | null;
          maxGuestsPerBooking?: number | null;
          minBookingLength?: number | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      insert_fake_bookings: {
        Args: Record<PropertyKey, never>;
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]) | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] & DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
