export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      addresses: {
        Row: {
          address_1: string
          address_2: string | null
          address_name: string | null
          address_type: Database["public"]["Enums"]["address_type_enum"] | null
          city: string
          country: string
          createdAt: string | null
          id: string
          is_default: boolean | null
          latitude: number | null
          longitude: number | null
          postal_code: string | null
          state: string | null
          user_id: string
        }
        Insert: {
          address_1: string
          address_2?: string | null
          address_name?: string | null
          address_type?: Database["public"]["Enums"]["address_type_enum"] | null
          city: string
          country: string
          createdAt?: string | null
          id?: string
          is_default?: boolean | null
          latitude?: number | null
          longitude?: number | null
          postal_code?: string | null
          state?: string | null
          user_id: string
        }
        Update: {
          address_1?: string
          address_2?: string | null
          address_name?: string | null
          address_type?: Database["public"]["Enums"]["address_type_enum"] | null
          city?: string
          country?: string
          createdAt?: string | null
          id?: string
          is_default?: boolean | null
          latitude?: number | null
          longitude?: number | null
          postal_code?: string | null
          state?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "addresses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "app_users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      app_users: {
        Row: {
          createdAt: string | null
          first_name: string
          last_name: string
          phone_number: string | null
          role: number
          user_id: string
        }
        Insert: {
          createdAt?: string | null
          first_name: string
          last_name: string
          phone_number?: string | null
          role: number
          user_id: string
        }
        Update: {
          createdAt?: string | null
          first_name?: string
          last_name?: string
          phone_number?: string | null
          role?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_role_fkey"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "user_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      attributes: {
        Row: {
          attribute_type: Database["public"]["Enums"]["attribute_type_enum"]
          id: string
          name: string
          value: string
        }
        Insert: {
          attribute_type: Database["public"]["Enums"]["attribute_type_enum"]
          id?: string
          name: string
          value: string
        }
        Update: {
          attribute_type?: Database["public"]["Enums"]["attribute_type_enum"]
          id?: string
          name?: string
          value?: string
        }
        Relationships: []
      }
      category: {
        Row: {
          category_name: string
          createdAt: string
          description: string
          id: string
          meta_details: string
          sort_order: number
        }
        Insert: {
          category_name: string
          createdAt?: string
          description: string
          id?: string
          meta_details: string
          sort_order?: number
        }
        Update: {
          category_name?: string
          createdAt?: string
          description?: string
          id?: string
          meta_details?: string
          sort_order?: number
        }
        Relationships: [
          {
            foreignKeyName: "category_meta_details_fkey"
            columns: ["meta_details"]
            isOneToOne: true
            referencedRelation: "meta_details"
            referencedColumns: ["id"]
          },
        ]
      }
      collection_products: {
        Row: {
          collection_id: string
          product_id: string
        }
        Insert: {
          collection_id: string
          product_id: string
        }
        Update: {
          collection_id?: string
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "collection_products_collection_id_fkey"
            columns: ["collection_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collection_products_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          createdAt: string
          description: string
          id: string
          image_url: string
          meta_details: string
          name: string
          sort_order: number
          status: boolean
        }
        Insert: {
          createdAt?: string
          description: string
          id?: string
          image_url: string
          meta_details: string
          name: string
          sort_order?: number
          status?: boolean
        }
        Update: {
          createdAt?: string
          description?: string
          id?: string
          image_url?: string
          meta_details?: string
          name?: string
          sort_order?: number
          status?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "collections_meta_details_fkey"
            columns: ["meta_details"]
            isOneToOne: false
            referencedRelation: "meta_details"
            referencedColumns: ["id"]
          },
        ]
      }
      meta_details: {
        Row: {
          createdAt: string
          id: string
          meta_description: string
          meta_keywords: string | null
          meta_title: string
          url_key: string
        }
        Insert: {
          createdAt?: string
          id?: string
          meta_description: string
          meta_keywords?: string | null
          meta_title: string
          url_key: string
        }
        Update: {
          createdAt?: string
          id?: string
          meta_description?: string
          meta_keywords?: string | null
          meta_title?: string
          url_key?: string
        }
        Relationships: []
      }
      product: {
        Row: {
          cover_image: string
          createdAt: string
          description: string
          free_shipping: boolean
          id: string
          is_featured: boolean
          meta_details: string | null
          name: string
          status: boolean
          sub_category: string
        }
        Insert: {
          cover_image: string
          createdAt?: string
          description: string
          free_shipping?: boolean
          id?: string
          is_featured?: boolean
          meta_details?: string | null
          name: string
          status?: boolean
          sub_category: string
        }
        Update: {
          cover_image?: string
          createdAt?: string
          description?: string
          free_shipping?: boolean
          id?: string
          is_featured?: boolean
          meta_details?: string | null
          name?: string
          status?: boolean
          sub_category?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_meta_details_fkey"
            columns: ["meta_details"]
            isOneToOne: false
            referencedRelation: "meta_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_sub_category_fkey"
            columns: ["sub_category"]
            isOneToOne: false
            referencedRelation: "sub_category"
            referencedColumns: ["id"]
          },
        ]
      }
      product_attributes: {
        Row: {
          attribute_id: string
          created_at: string
          id: number
          product_id: string
        }
        Insert: {
          attribute_id: string
          created_at?: string
          id?: number
          product_id: string
        }
        Update: {
          attribute_id?: string
          created_at?: string
          id?: number
          product_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "product_attributes_attribute_id_fkey"
            columns: ["attribute_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_attributes_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      product_variant: {
        Row: {
          createdAt: string | null
          id: string
          images: string[]
          is_default: boolean
          original_price: number
          product_id: string
          reorder_level: number
          sale_price: number
          sku: string
          status: boolean
          stock: number
          weight: number | null
        }
        Insert: {
          createdAt?: string | null
          id?: string
          images?: string[]
          is_default?: boolean
          original_price?: number
          product_id: string
          reorder_level?: number
          sale_price?: number
          sku: string
          status?: boolean
          stock?: number
          weight?: number | null
        }
        Update: {
          createdAt?: string | null
          id?: string
          images?: string[]
          is_default?: boolean
          original_price?: number
          product_id?: string
          reorder_level?: number
          sale_price?: number
          sku?: string
          status?: boolean
          stock?: number
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_variant_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "product"
            referencedColumns: ["id"]
          },
        ]
      }
      sub_category: {
        Row: {
          createdAt: string
          description: string
          id: string
          meta_details: string
          parent_id: string
          sort_order: number
          sub_category_name: string
        }
        Insert: {
          createdAt?: string
          description: string
          id?: string
          meta_details: string
          parent_id: string
          sort_order?: number
          sub_category_name: string
        }
        Update: {
          createdAt?: string
          description?: string
          id?: string
          meta_details?: string
          parent_id?: string
          sort_order?: number
          sub_category_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "sub_category_meta_details_fkey"
            columns: ["meta_details"]
            isOneToOne: true
            referencedRelation: "meta_details"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sub_category_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "category"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          createdAt: string
          id: number
          role_name: string
        }
        Insert: {
          createdAt?: string
          id?: number
          role_name: string
        }
        Update: {
          createdAt?: string
          id?: number
          role_name?: string
        }
        Relationships: []
      }
      variant_attributes: {
        Row: {
          attribute_id: string
          created_at: string
          id: string
          variant_id: string
        }
        Insert: {
          attribute_id: string
          created_at?: string
          id?: string
          variant_id: string
        }
        Update: {
          attribute_id?: string
          created_at?: string
          id?: string
          variant_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "variant_attributes_attribute_id_fkey"
            columns: ["attribute_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "variant_attributes_variant_id_fkey"
            columns: ["variant_id"]
            isOneToOne: false
            referencedRelation: "product_variant"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      create_collection: {
        Args: {
          p_name: string
          p_description: string
          p_image_url: string
          p_url_key: string
          p_meta_title: string
          p_meta_description: string
          p_meta_keywords: string
          p_sort_order: number
          p_status: boolean
          p_product_ids: string[]
        }
        Returns: string
      }
      get_high_level_collections: {
        Args: {
          p_search_term?: string
          p_page?: number
          p_page_size?: number
          p_sort_by?: string
          p_sort_direction?: string
        }
        Returns: {
          id: string
          name: string
          image_url: string
          status: boolean
          created_at: string
          url_key: string
          products_count: number
          total_count: number
        }[]
      }
      get_product_attribute_types: {
        Args: Record<PropertyKey, never>
        Returns: {
          attribute_type: Database["public"]["Enums"]["attribute_type_enum"]
          values_count: number
        }[]
      }
      update_collection: {
        Args: {
          p_collection_id: string
          p_name: string
          p_description: string
          p_image_url: string
          p_sort_order: number
          p_status: boolean
          p_meta_details_id: string
          p_url_key: string
          p_meta_title: string
          p_meta_description: string
          p_meta_keywords: string
          p_added_product_ids: string[]
          p_removed_product_ids: string[]
        }
        Returns: undefined
      }
    }
    Enums: {
      address_type_enum: "shipping" | "billing" | "both"
      attribute_type_enum: "color" | "size" | "material" | "style" | "brand"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {
      address_type_enum: ["shipping", "billing", "both"],
      attribute_type_enum: ["color", "size", "material", "style", "brand"],
    },
  },
} as const
