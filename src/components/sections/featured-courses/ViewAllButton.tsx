
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ViewAllButton = () => {
  return (
    <div className="mt-12 text-center">
      <Button 
        size="lg"
        variant="outline" 
        className="border-edtech-primary/70 text-edtech-primary hover:bg-edtech-primary/10 font-semibold"
      >
        View All Courses <ArrowRight size={18} className="ml-2" />
      </Button>
    </div>
  );
};

export default ViewAllButton;
