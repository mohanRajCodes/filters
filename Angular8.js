/**
 *  Angular Filters  & Sorting
 *  1. limitTo - limitTo:x:y
 *  x->starting
 *  y->ending
 */


var myapp = angular.module("MyModule",[])
                   .controller("MyController",function($scope){
                	  
                	   var cricketer = [
                		   
                		   {
                			   name: "Vijay Sankar",
                			   dateOfBirth: new Date("January 26,1991"),
                			   gender:"Male",
                			   type:"Batting Allrounder"
                		   },
                		   
                		   {
                			   name: "Harmanpreet kaur",
                			   dateOfBirth: new Date("March 08,1989"),
                			   gender:"Female",
                			   type:"Batting Allrounder"
                		   },
                		   
                		   {
                			   name: "Smriti Mandhana",
                			   dateOfBirth: new Date("July 18,1996"),
                			   gender:"Female",
                			   type:"Batsman"
                		   },
                		   {
                			   name: "Hardhik pandya",
                			   dateOfBirth: new Date("January 26,1993"),
                			   gender:"Male",
                			   type:"Batting Allrounder"
                		   }
                		   
                		   
                	   ];
               	   
                	   $scope.info = cricketer;
                	   $scope.rowLimit = cricketer.length;
                	   $scope.sortColumn = "name";
                	   $scope.reverseSort = false;
                	   $scope.SortDirection = function(column){
                		   
                		   if( column == $scope.column )
                			   {
                			    
                			   $scope.reverseSort = !$scope.reverseSort;
                			     
                			   }else{
                				   
                				   $scope.reverseSort = false;
                				   $scope.column = column;
                				   
                			   }
                		  
                	   };
                	   $scope.Arrow = function (column){
                		   
                		   if($scope.column == column){
                			   
                		   
                		   if ($scope.reverseSort == true ){
                			   
                			   return "Arrow-down"
                		   }
                		   else {
                			   return "Arrow-up"
                		   }
                		   
                		   }else {
                			   
                			   return ' '
                		   }              	
                	   }
                	   
                	   
                   });


                   
                   
                   
                   
                   