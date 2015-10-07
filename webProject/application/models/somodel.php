<?php
  /**
  * 
  */
class somodel extends CI_Model
   {
   	

	
	 public function __construct()
	{
		
	 $this->load->database();
	 
	 
	}

	public function adduser()
	{
	     	$data = array(
		'name' => $this->input->post('name'),
        'year'=>$this->input->post('year'),
		'emailid' => $this->input->post('emailid'),
    //'admission_number'=>$this->input->post('admissionno'),
        'phonenumber'=>$this->input->post('phonenumber'),
        'interest_1'=>$this->input->post('interest_1'),
        'interest_2'=>$this->input->post('interest_2'),
        'interest_3'=>$this->input->post('interest_3'),
        'password' => md5($this->input->post('password'))




    
     //'admission_number'=>$this->input->post('admissionno'),
     //'phoneno'=>$this->input->post('phoneno')
	); 
	//echo $data['name']; 
	//echo $data['interest1'];
	$this->db->insert('users',$data);
	echo "done";

	}

	public function sig()
	{
		$emaill=$this->input->post('emailid');
		$pass=md5($this->input->post('password'));
		//$this->db->select('interest_2,interest_3');
		$this->db->where('emailid',$emaill);
		$this->db->where('password',$pass);
		$query=$this->db->get('users');
		$ar=$query->result();
		//print_r($ar);
		$sess_data=array(     'in1'=>$ar[0]->interest_1,	'in2'=> $ar[0]->interest_2,
     	'in3'=>$ar[0]->interest_3,
     	  'user_id'=> $ar[0]->id);
		$this->session->set_userdata($sess_data);
     	//$in2= $ar[0]->interest_2;
     	//$in3=$ar[0]->interest_3;
     	//$this->findsociety($in2,$in3);
	}

	public function findsociety($in1,$in2,$in3)
	  {
	  	//echo $in1;
         //echo $in2;
	  	$this->db->like('interests',$in1,'both');
	  	$this->db->or_like('interests',$in2,'both');
	  	$this->db->or_like('interests',$in3,'both');
	  	$query=$this->db->get('Societytb');
	  	$bc=$query->result_array();
	  	$ac=json_encode($bc);
	  	print_r($ac);

	  }

	  public function fetchevents()
	  {
	  	$soc=$this->input->post('socid');
	  	$this->db->where('society_id',$soc);
	  	$query=$this->db->get('events');
	  	$eve=$query->result_array();
	  	print_r(json_encode($eve));
	  }

	  public function storedet()
	  { 

          $data = array('sender_name' =>$this->input->post('sender_name') ,'phonenumber'=>$this->input->post('phonenumber'),
          	'emailid'=>$this->input->post('emailid'),'comment'=>$this->input->post('comment') );
         print_r( $this->db->insert('contacttb',$data));
	  }

 

   }
?>