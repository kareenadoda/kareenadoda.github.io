export type FeatureCommentRow = {
  id: string;
  display_name: string | null;
  body: string;
  approved: boolean;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      feature_comments: {
        Row: FeatureCommentRow;
        Insert: {
          display_name?: string | null;
          body: string;
          approved?: boolean;
        };
        Update: {
          display_name?: string | null;
          body?: string;
          approved?: boolean;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
