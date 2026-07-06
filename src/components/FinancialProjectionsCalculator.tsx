
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { ChartContainer, ChartTooltip } from '@/components/ui/chart';
import { Download } from "lucide-react";

// Financial projection form schema
const financialSchema = z.object({
  revenueMonthlySales: z.coerce.number().min(0, { message: "Cannot be negative" }),
  revenueYearlySales: z.coerce.number().min(0, { message: "Cannot be negative" }),
  fixedExpenseRent: z.coerce.number().min(0, { message: "Cannot be negative" }),
  fixedExpenseSalaries: z.coerce.number().min(0, { message: "Cannot be negative" }),
  fixedExpenseUtilities: z.coerce.number().min(0, { message: "Cannot be negative" }),
  variableExpenseRawMaterials: z.coerce.number().min(0, { message: "Cannot be negative" }),
  variableExpenseMarketing: z.coerce.number().min(0, { message: "Cannot be negative" }),
  investmentLoans: z.coerce.number().min(0, { message: "Cannot be negative" }),
  investmentFunding: z.coerce.number().min(0, { message: "Cannot be negative" }),
  investmentStartupCosts: z.coerce.number().min(0, { message: "Cannot be negative" }),
  growthRate: z.coerce.number().min(0, { message: "Cannot be negative" }).max(100, { message: "Cannot exceed 100%" }),
});

type FinancialFormData = z.infer<typeof financialSchema>;

const FinancialProjectionsCalculator = () => {
  const [calculationResults, setCalculationResults] = useState<any>(null);
  
  const form = useForm<FinancialFormData>({
    resolver: zodResolver(financialSchema),
    defaultValues: {
      revenueMonthlySales: 10000,
      revenueYearlySales: 120000,
      fixedExpenseRent: 2000,
      fixedExpenseSalaries: 5000,
      fixedExpenseUtilities: 500,
      variableExpenseRawMaterials: 2000,
      variableExpenseMarketing: 1000,
      investmentLoans: 50000,
      investmentFunding: 100000,
      investmentStartupCosts: 75000,
      growthRate: 10,
    }
  });

  const calculateFinancialProjections = (data: FinancialFormData) => {
    // Monthly revenue
    const monthlyRevenue = data.revenueMonthlySales;
    
    // Monthly fixed expenses
    const monthlyFixedExpenses = data.fixedExpenseRent + data.fixedExpenseSalaries + data.fixedExpenseUtilities;
    
    // Monthly variable expenses
    const monthlyVariableExpenses = data.variableExpenseRawMaterials + data.variableExpenseMarketing;
    
    // Monthly profit
    const monthlyProfit = monthlyRevenue - monthlyFixedExpenses - monthlyVariableExpenses;
    
    // Annual revenue
    const annualRevenue = data.revenueYearlySales;
    
    // Annual expenses
    const annualFixedExpenses = monthlyFixedExpenses * 12;
    const annualVariableExpenses = monthlyVariableExpenses * 12;
    const annualTotalExpenses = annualFixedExpenses + annualVariableExpenses;
    
    // Annual profit
    const annualProfit = annualRevenue - annualTotalExpenses;
    
    // ROI
    const totalInvestment = data.investmentLoans + data.investmentFunding + data.investmentStartupCosts;
    const roi = totalInvestment > 0 ? (annualProfit / totalInvestment) * 100 : 0;
    
    // Break-even analysis
    const breakEvenMonths = monthlyFixedExpenses > 0 ? 
      Math.ceil(data.investmentStartupCosts / (monthlyRevenue - monthlyVariableExpenses - monthlyFixedExpenses)) : 
      0;
    
    // 5-year projection with growth rate
    const fiveYearProjection = Array.from({ length: 5 }, (_, i) => {
      const yearGrowthFactor = Math.pow(1 + (data.growthRate / 100), i);
      const yearRevenue = annualRevenue * yearGrowthFactor;
      // Assume expenses also grow but at a slower rate
      const yearExpenses = annualTotalExpenses * Math.pow(1 + (data.growthRate / 200), i);
      const yearProfit = yearRevenue - yearExpenses;
      
      return {
        year: `Year ${i + 1}`,
        revenue: Math.round(yearRevenue),
        expenses: Math.round(yearExpenses),
        profit: Math.round(yearProfit),
      };
    });
    
    // Expense breakdown for pie chart
    const expenseBreakdown = [
      { name: 'Rent', value: data.fixedExpenseRent * 12 },
      { name: 'Salaries', value: data.fixedExpenseSalaries * 12 },
      { name: 'Utilities', value: data.fixedExpenseUtilities * 12 },
      { name: 'Raw Materials', value: data.variableExpenseRawMaterials * 12 },
      { name: 'Marketing', value: data.variableExpenseMarketing * 12 },
    ];
    
    return {
      summary: {
        monthlyRevenue,
        monthlyExpenses: monthlyFixedExpenses + monthlyVariableExpenses,
        monthlyProfit,
        annualRevenue,
        annualExpenses: annualTotalExpenses,
        annualProfit,
        roi,
        breakEvenMonths
      },
      fiveYearProjection,
      expenseBreakdown
    };
  };

  const onSubmit = (data: FinancialFormData) => {
    const results = calculateFinancialProjections(data);
    setCalculationResults(results);
    toast({
      title: "Calculations Complete",
      description: "Your financial projections have been calculated.",
    });
  };

  const downloadReport = () => {
    // In a real app, this would generate a PDF or Excel file
    toast({
      title: "Report Downloaded",
      description: "Your financial projections report has been downloaded.",
    });
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Financial Projections Calculator</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Enter Your Financial Details</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Revenue Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="revenueMonthlySales"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Sales ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="revenueYearlySales"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Yearly Sales ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Fixed Expenses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="fixedExpenseRent"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Rent ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fixedExpenseSalaries"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Salaries ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fixedExpenseUtilities"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Monthly Utilities ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Variable Expenses</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="variableExpenseRawMaterials"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Raw Materials ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="variableExpenseMarketing"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marketing Costs ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Investment & Funding</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="investmentLoans"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Loans ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="investmentFunding"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>External Funding ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="investmentStartupCosts"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Startup Costs ($)</FormLabel>
                          <FormControl>
                            <Input type="number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-4">Growth Projection</h3>
                  <FormField
                    control={form.control}
                    name="growthRate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Projected Annual Growth Rate (%)</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              <Button type="submit" className="w-full bg-entrepreneur-primary hover:bg-entrepreneur-secondary">
                Calculate Projections
              </Button>
            </form>
          </Form>
        </div>

        {calculationResults && (
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Results</h2>
              <Button onClick={downloadReport} variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" /> Download Report
              </Button>
            </div>

            <Card className="mb-6">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Financial Summary</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Monthly Revenue</Label>
                    <p className="text-lg font-bold">${calculationResults.summary.monthlyRevenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label>Monthly Expenses</Label>
                    <p className="text-lg font-bold">${calculationResults.summary.monthlyExpenses.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label>Monthly Profit</Label>
                    <p className={`text-lg font-bold ${calculationResults.summary.monthlyProfit < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      ${calculationResults.summary.monthlyProfit.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <Label>Annual Revenue</Label>
                    <p className="text-lg font-bold">${calculationResults.summary.annualRevenue.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label>Annual Expenses</Label>
                    <p className="text-lg font-bold">${calculationResults.summary.annualExpenses.toLocaleString()}</p>
                  </div>
                  <div>
                    <Label>Annual Profit</Label>
                    <p className={`text-lg font-bold ${calculationResults.summary.annualProfit < 0 ? 'text-red-500' : 'text-green-500'}`}>
                      ${calculationResults.summary.annualProfit.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <Label>ROI</Label>
                    <p className="text-lg font-bold">{calculationResults.summary.roi.toFixed(2)}%</p>
                  </div>
                  <div>
                    <Label>Break-even</Label>
                    <p className="text-lg font-bold">{calculationResults.summary.breakEvenMonths} months</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h3 className="text-lg font-semibold mb-4">5-Year Projection</h3>
            <div className="h-80 mb-8">
              <ChartContainer config={{
                revenue: { color: "#0088FE" },
                expenses: { color: "#FF8042" },
                profit: { color: "#00C49F" }
              }}>
                <LineChart data={calculationResults.fiveYearProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <ChartTooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" name="Revenue" stroke="#0088FE" />
                  <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#FF8042" />
                  <Line type="monotone" dataKey="profit" name="Profit" stroke="#00C49F" />
                </LineChart>
              </ChartContainer>
            </div>

            <h3 className="text-lg font-semibold mb-4">Expense Distribution</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={calculationResults.expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {calculationResults.expenseBreakdown.map((entry: any, index: number) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialProjectionsCalculator;
